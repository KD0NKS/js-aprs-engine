import * as chai from 'chai';
import StationSettings from '../src/StationSettings';
import PouchDB from 'pouchdb-node';

PouchDB.plugin(require('pouchdb-adapter-memory'));

const assert = require('assert');
const should = chai.should();
//const expect = chai.expect;

describe('StationSettings Tests', () => {
    let db = new PouchDB('aprstest', { adapter: 'memory' });

    describe("#StationSettings - Default values", () => {
        let settings = new StationSettings(); // private db: PouchDB.Database;

        it("Should return callsign: N0CALL", () => {
            assert.equal("N0CALL", settings.callsign);
        });

        it("Should return passcode: -1", () => {
            assert.equal(-1, settings.passcode);
        });

        it("Should return ssid: null", () => {
            should.not.exist(settings.ssid);
        });
    });

    describe("#StationSettings - Set values", () => {
        let settings: StationSettings = {
            callsign: "T3ST"
            , passcode: 1234
            , ssid: 7
        };

        it("Should return callsign: T3ST", () => {
            assert.equal("T3ST", settings.callsign);
        });

        it("Should return passcode: 1234", () => {
            assert.equal(1234, settings.passcode);
        });

        it("Should return ssid: null", () => {
            assert.equal(7, settings.ssid);
        });
    });
});