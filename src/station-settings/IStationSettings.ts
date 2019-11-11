import { IObservable } from "../observable/IObservable";

export interface IStationSettings extends IObservable {
    callsign: string;
    passcode: number;
    ssid: string;
    symbol?: string;
    symbolOverlay?: string;
}