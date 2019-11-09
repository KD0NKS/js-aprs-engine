import { injectable } from "inversify";
import { IStationSettings } from './IStationSettings';
import 'reflect-metadata';
import { AbstractObservable } from "../observable/AbstractObservable";

@injectable()
class StationSettings
        extends AbstractObservable
        implements IStationSettings {
    callsign: string = "N0CALL";
    passcode: number = -1;
    ssid: string;
    symbol?: string;
    symbolOverlay?: string;
}

export { StationSettings };