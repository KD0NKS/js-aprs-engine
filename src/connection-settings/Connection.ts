import { Socket } from "net";
import ConnectionTypes from "./ConnectionTypes";
import { ISSocket } from "js-aprs-is";
import { IConnection } from "./IConnection";

/**
 * @property { string } name Name of the connection
 * @property { Socket } connection The actual connection reading APRS data
 * @property { ConnectionTypeEnum } connectionType Key value from the ConnectionTypeEnum
 * @property { bool } isEnabled Whether or not the connection is enabled by default
 */
class Connection implements IConnection {
    public name: string;
    public connectionType: Symbol
    public connection: Socket;

    public host?: string;
    public port?: number;
    public filter?: string;

    private _isConnected: boolean;
    private _isEnabled: boolean = false;
    private DISCONNECT_EVENTS: string[] = ['destroy', 'end', 'close', 'error', 'timeout'];
    private CONNECT_EVENTS: string[] = ['connect'];

    public constructor() {
        for(var e in this.DISCONNECT_EVENTS) {
            this.connection.on(e, () => {
                this._isConnected = false;
            });
        };

        for(var e in this.CONNECT_EVENTS) {
            this.connection.on(e, () => {
                this._isConnected = true;
            });
        };

        this.connection.on('data', (data) => {
            console.log(data);
        });
    }

    public get isConnected(): boolean {
        return this._isConnected;
    }

    public get isEnabled(): boolean {
        return this._isEnabled;
    }

    public set isEnabled(isEnabled: boolean) {
        this._isEnabled = isEnabled;

        if(this.connection) {
            if(this.connectionType === ConnectionTypes.IS_SOCKET) {
                (this.connection as ISSocket).disconnect();
            }
        }
    }
}

export { Connection }