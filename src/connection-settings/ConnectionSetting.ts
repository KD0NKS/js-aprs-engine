import { Socket } from "net";

/**
 * @property { string } name Name of the connection
 * @property { Socket } connection The actual connection reading APRS data
 * @property { ConnectionTypeEnum } connectionType Key value from the ConnectionTypeEnum
 * @property { bool } isEnabled Whether or not the connection is enabled by default
 */
class ConnectionSetting {
    public name: string;
    public connectionType: Symbol
    public isEnabled: boolean = false;
    public connection: Socket;

    public constructor() { }
}

export { ConnectionSetting }