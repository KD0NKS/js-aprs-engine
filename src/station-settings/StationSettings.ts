import { StringUtil } from '../util/StringUtil';
import { AbstractObservable } from '../observable/AbstractObservable';

/**
 * @property { string } callsign - Station's callsign
 * @property { string } ssid - ssid for station
 * @property { number } passcode - APRS-IS passcode
 * @property { string? } symbol - optional setting for setting the stations APRS symbol.  This is really only needed if sending packets.
 * @property { string? } symbolOverlay - optional setting for overlyaing the station symbol.  This is only valid under certain conditions
 *
 * To update the connection manager, NotifyObservers() must be called after all updates are made.
 */
class StationSettings
        extends AbstractObservable {
    private static _instance: StationSettings;

    private constructor() {
        super();

        StringUtil.IsNullOrWhiteSpace('');
    }

    static get instance() {
        if(!this._instance) {
            this._instance = new StationSettings();
        }

        return this._instance;
    }

    public callsign: string = "N0CALL";
    public passcode: number = -1;
    public ssid: string;
    public symbol?: string;
    public symbolOverlay?: string;
}

var instance = StationSettings.instance;

export { instance as StationSettings };