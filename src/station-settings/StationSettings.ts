import { injectable } from "inversify";
import { IStationSettings } from './IStationSettings';
import 'reflect-metadata';

@injectable()
class StationSettings implements IStationSettings {
    public callsign: string = "N0CALL";
    public passcode: number = -1;
    public ssid: string;
    public symbol?: string;
    public symbolOverlay?: string;
}

export { StationSettings };