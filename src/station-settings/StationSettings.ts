import { injectable } from "inversify";
import { IStationSettings } from './IStationSettings';
import 'reflect-metadata';
import { AbstractObservable } from "../observable/AbstractObservable";

/**
 * @property { string } callsign - Station's callsign
 * @property { string } ssid - ssid for station
 * @property { number } passcode - APRS-IS passcode
 * @property { string? } symbol - optional setting for setting the stations APRS symbol.  This is really only needed if sending packets.
 * @property { string? } symbolOverlay - optional setting for overlyaing the station symbol.  This is only valid under certain conditions
 *
 * To update the connection manager, NotifyObservers() must be called after all updates are made.
 */
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