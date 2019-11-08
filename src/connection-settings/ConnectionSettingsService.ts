import { ConnectionSetting } from './ConnectionSetting';
import ConnectionTypes from './ConnectionTypes';
import { inject, injectable } from 'inversify';
import { ISSocket } from 'js-aprs-is';
import 'reflect-metadata';
import TYPES from '../Types';

@injectable()
class ConnectionSettingsService {
    private _connections: ConnectionSetting[] = [];
    private _appId: string;

    // TODO: Inject app version
    // TODO: Inject app settings
    constructor(
            @inject(TYPES.STATION_SETTINGS)
            appId: string) {
        this._appId = appId;
    }

    public addConnection(connection: ConnectionSetting) {
        if(connection != null) {
            if(connection.connectionType == ConnectionTypes.IS_SOCKET) {
                /*
                connection.connection = new ISSocket() {

                };
                */
            }

            this._connections.push(connection);
        }
    }

    public getConnections(): ConnectionSetting[] {
        return this._connections;
    }
}

export { ConnectionSettingsService }