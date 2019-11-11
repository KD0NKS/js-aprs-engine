import { ConnectionSetting } from "./ConnectionSetting";

export interface IConnectionManager {
    appId: string;

    getConnections(): ConnectionSetting[];
}