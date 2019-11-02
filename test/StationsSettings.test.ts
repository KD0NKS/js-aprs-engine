import * as chai from 'chai';
import { StationSettings } from '../src/StationSettings';

const should = chai.should();

describe('StationSettings Tests', () => {
    describe('Test StationSettings constructor.', () => {
        it("Should instantiate a StationSettings instance using all default parameters", () => {
            const settings: StationSettings = new StationSettings();

            settings.should.have.property('callsign').equal('N0CALL');
            settings.should.have.property('passcode').equal(-1);
            should.not.exist(settings.ssid);
        });

        it("Should instantiate a StationSettings instance using given parameters", () => {
            const settings: StationSettings = {
                callsign: "T3ST"
                , passcode: 1234
                , ssid: 7
            };

            settings.should.have.property('callsign').equal('T3ST');
            settings.should.have.property('passcode').equal(1234);
            settings.should.have.property('ssid').equal(7);
        });

        it("Should StationSettings properties set properly", () => {
            const settings: StationSettings = new StationSettings();

            settings.callsign = 'T3ST';
            settings.passcode = 1234;
            settings.ssid = 7;

            settings.should.have.property('callsign').equal('T3ST');
            settings.should.have.property('passcode').equal(1234);
            settings.should.have.property('ssid').equal(7);
        });
    });
});