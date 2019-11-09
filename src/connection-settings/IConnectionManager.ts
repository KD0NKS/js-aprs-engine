import { ConnectionSetting } from "./ConnectionSetting";

export interface IConnectionManager {
    getConnections(): ConnectionSetting[];
}