import { aprsParser } from 'js-aprs-fap';
import { Connection } from './Connection';
import ConnectionTypes from './ConnectionTypes';
import { EventEmitter } from 'events';
import { IConnection } from './IConnection';
import { ISSocket } from 'js-aprs-is';
import { IObserver } from '../observable/IObserver';
import { StationSettings } from '../station-settings/StationSettings';

/**
 * Singleton
 * Listens to StationSettings
 */
class ConnectionManager extends EventEmitter implements IObserver {
    private static _instance: ConnectionManager;

    private _appId = 'js-aprs-engine 1.0.0';
    private _connections: Connection[] = [];
    private _settings = StationSettings;
    private _parser = new aprsParser();

    // TODO: Need an app version here too
    private constructor() {
        super();

        this._settings.RegisterObserver(this);
    }

    public static get instance() {
        if(!this._instance) {
            this._instance = new ConnectionManager();
        }

        return this._instance;
    }

    public set appId(value: string) {
        this._appId = value;
        this.ChangeEvent();
    }

    public get appId(): string {
        return this._appId;
    }

    public addConnection(setting: IConnection) {
        if(setting !== null) {
            var conn: Connection = setting as Connection;

            if(conn.connectionType === ConnectionTypes.IS_SOCKET) {
                // todo validation before creation
                var connection = new ISSocket(conn.host, conn.port, this.getCallsign, this._settings.passcode, conn.filter, this._appId);
                conn.connection = connection;

                conn.connection.on('packet', (data: string) => {
                    this.emit('data', data);

                    if(data.charAt(0) == '#') {
                        (conn.connection as ISSocket).sendLine(connection.userLogin);
                    } else if(data.startsWith('user')) {
                        this.emit('data', data)
                    } else {
                        let msg = this._parser.parseaprs(data);

                        this.emit('packet', msg);
                    }
                })

                conn.connection.on('data', (data: string) => {
                    this.emit('data', data);
                })

                conn.connection.on('error', (err: Error) => {
                    this.emit('error', err);
                })

                if(conn.isEnabled === true) {
                    (conn.connection as ISSocket).connect();
                }
            }

            this._connections.push(conn);
        }
    }

    public getConnections(): Connection[] {
        return this._connections;
    }

    public ChangeEvent(): void {
        this._connections
                .filter((x) => { return x.connection.constructor.name === 'ISSocket'; })
                .map(conn => {
                    let c = conn.connection as ISSocket;

                    c.callsign = this.getCallsign;
                    c.passcode = this._settings.passcode;
                    c.appId = this.appId;
                });
    }

    private get getCallsign(): string {
        let callsign = this._settings.callsign;

        if(this._settings.ssid !== null && this._settings.ssid !== undefined) {
            callsign = callsign + '-' + this._settings.ssid;
        }

        return callsign;
    }
}

const instance = ConnectionManager.instance;

export { instance as ConnectionManager };