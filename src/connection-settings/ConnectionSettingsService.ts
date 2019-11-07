import { ConnectionSetting } from './ConnectionSetting';

export class ConnectionSettingsService {
    private _connections: ConnectionSetting[] = [];
    private _appId: string;

    constructor(appId: string) {
        this._appId = appId;
    }

    public addConnection(connection: ConnectionSetting) {
        if(connection != null) {
            this._connections.push(connection);
        }
    }

    public getConnections(): ConnectionSetting[] {
        return this._connections;
    }
}