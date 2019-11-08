import * as chai from 'chai';
import { EngineContainer } from '../inversify.config';
import { IStationSettings } from '../src/station-settings/IStationSettings';
import { StationSettings } from '../src/station-settings/StationSettings';
import TYPES from '../src/Types';

const should = chai.should();

describe('StationSettings Tests', () => {
    describe('Test StationSettings constructor.', () => {
        it("Should instantiate a StationSettings instance using all default parameters", () => {
            const settings: StationSettings = EngineContainer.get<IStationSettings>(TYPES.STATION_SETTINGS);

            settings.should.have.property('callsign').equal('N0CALL');
            settings.should.have.property('passcode').equal(-1);
            should.not.exist(settings.ssid);
        });

        it("Should instantiate a StationSettings instance using given parameters", () => {
            let settings: StationSettings = EngineContainer.get<IStationSettings>(TYPES.STATION_SETTINGS);
            settings.callsign = "T3ST";
            settings.passcode = 1234;
            settings.ssid = '7';

            settings.should.have.property('callsign').equal('T3ST');
            settings.should.have.property('passcode').equal(1234);
            settings.should.have.property('ssid').equal('7');
        });

        it("Should StationSettings properties set properly", () => {
            let settings: StationSettings = EngineContainer.get<IStationSettings>(TYPES.STATION_SETTINGS);

            settings.callsign = 'T3ST';
            settings.passcode = 1234;
            settings.ssid = '7';

            settings.should.have.property('callsign').equal('T3ST');
            settings.should.have.property('passcode').equal(1234);
            settings.should.have.property('ssid').equal('7');
        });

        it("Should both instances have the same vaules.", () => {
            let settings: StationSettings = EngineContainer.get<IStationSettings>(TYPES.STATION_SETTINGS);
            let settings2: StationSettings = EngineContainer.get<IStationSettings>(TYPES.STATION_SETTINGS);

            settings.callsign = 'T3ST';

            settings2.should.have.property('callsign').equal("T3ST");
        });
    });
});