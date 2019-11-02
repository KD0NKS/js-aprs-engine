import assert from 'assert';
import * as chai from 'chai';
import { StationSettings } from '../src/StationSettings';

const should = chai.should();
const expect = chai.expect;

describe('StationSettings Tests', () => {
    describe("Should instantiate a StationSettings instance using all default parameters", () => {
        const settings = new StationSettings();

        expect(settings.callsign).to.equal('N0CALL');
        expect(settings.passcode).to.equal('-1');
        should.not.exist(settings.ssid);
    });

    describe("#StationSettings - Set values", () => {
        const settings: StationSettings = {
            callsign: "T3ST"
            , passcode: 1234
            , ssid: 7
        };

        expect(settings.callsign).to.equal('T3ST');
        expect(settings.passcode).to.equal(1234);
        expect(settings.ssid).to.equal(7);
    });
});