import ConnectionTypeEnum from './ConnectionTypeEnum';
import { Socket } from 'net';

/**
 * @property { string } name Name of the connection
 * @property { Socket } connection The actual connection reading APRS data
 * @property { ConnectionTypeEnum } connectionType Key value from the ConnectionTypeEnum
 * @property { bool } isEnabled Whether or not the connection is enabled by default
 */
export class ConnectionSetting {
    public name: string;
    public connection: Socket;
    public connectionType: ConnectionTypeEnum
    public isEnabled: boolean = false;

    public constructor() { }
}