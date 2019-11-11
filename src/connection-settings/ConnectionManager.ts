import { ConnectionSetting } from './ConnectionSetting';
import ConnectionTypes from './ConnectionTypes';
import { inject, injectable } from 'inversify';
import { ISSocket } from 'js-aprs-is';
import 'reflect-metadata';
import TYPES from '../Types';
import { IStationSettings } from '../station-settings/IStationSettings';
import { IObserver } from '../observable/IObserver';
import { StationSettings } from '../station-settings/StationSettings';
import { IConnectionManager } from './IConnectionManager';

@injectable()
class ConnectionManager implements IObserver, IConnectionManager {
    private _settings: StationSettings;
    private _connections: ConnectionSetting[] = [];

    private _appId = 'js-aprs-engine 1.0.0';


    // TODO: Need an app version here too
    constructor(
            @inject(TYPES.STATION_SETTINGS) settings: IStationSettings) {
        this._settings = settings as StationSettings;

        this._settings.RegisterObserver(this);
    }

    set appId(value: string) {
        this._appId = value;
        this.ChangeEvent();
    }

    get appId(): string {
        return this._appId;
    }

    /*
    public addConnection(connection: ConnectionSetting) {
        if(connection != null) {
            if(connection.connectionType == ConnectionTypes.IS_SOCKET) {

            }

            this._connections.push(connection);
        }
    }
    */

    public getConnections(): ConnectionSetting[] {
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

export { ConnectionManager }