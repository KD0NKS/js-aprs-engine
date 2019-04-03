import APRSSymbol from "../symbols/APRSSymbol";

export default class StationSettings {
    constructor() { }

    public callsign: string = "N0CALL";
    public passcode: number = -1;
    public ssid: string;
    public symbol?: string;
    public symbolOverlay?: string;
}