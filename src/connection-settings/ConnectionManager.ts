import { Connection } from './Connection';
import ConnectionTypes from './ConnectionTypes';
import { ISSocket } from 'js-aprs-is';
import { IObserver } from '../observable/IObserver';
import { StationSettings } from '../station-settings/StationSettings';
import { IConnection } from './IConnection';

class ConnectionManager implements IObserver {
    private static _instance: ConnectionManager;

    private _appId = 'js-aprs-engine 1.0.0';
    private _connections: Connection[] = [];
    private _settings = StationSettings;

    // TODO: Need an app version here too
    private constructor() {
        this._settings.RegisterObserver(this);
    }

    static get instance() {
        if(!this._instance) {
            this._instance = new ConnectionManager();
        }

        return this._instance;
    }

    set appId(value: string) {
        this._appId = value;
        this.ChangeEvent();
    }

    get appId(): string {
        return this._appId;
    }

    public addConnection(setting: IConnection) {
        var conn: Connection = setting as Connection;

        if(setting != null) {
            this._connections.push(conn);

            if(conn.connectionType == ConnectionTypes.IS_SOCKET) {
                // todo validation before creation
                var connection = new ISSocket(conn.host, conn.port, StationSettings.callsign, StationSettings.passcode, conn.filter, this._appId);
                conn.connection = connection;

                if(conn.isEnabled === true) {
                    connection.connect();
                }
            }

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

                    c.callsign = this._settings.callsign;

                    if(this._settings.ssid !== null && this._settings !== undefined) {
                        c.callsign = c.callsign + '-' + this._settings.ssid;
                    }

                    c.passcode = this._settings.passcode;

                    c.appId = this.appId;
                });
    }
}

var instance = ConnectionManager.instance;

export { instance as ConnectionManager };