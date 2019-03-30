import * as chai from 'chai';
import APRSSymbolService from '../src/symbols/APRSSymbolService';

const assert = require('assert');
const should = chai.should();

describe('StationIconService Tests', () => {
    let stationIconSvc = new APRSSymbolService();

    describe("Should return crosshair with no overlay - unknown icon", () => {
        let retVal = stationIconSvc.GetIcon('/', '}');

        it("Should return a crosshair icon.", () => {
            assert.equal('', retVal.icon.key);
            assert.equal('/Crosshair.gif', retVal.icon.value);
            assert.equal('Crosshair', retVal.icon.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });

    describe("Should return a known primary table icon with no overlay - truck icon", () => {
        let retVal = stationIconSvc.GetIcon('/', 'k');

        it("Should return a crosshair icon.", () => {
            assert.equal('/k', retVal.icon.key);
            assert.equal('/PrimaryTable/Truck.gif', retVal.icon.value);
            assert.equal('Truck', retVal.icon.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });

    describe("Should return a known alt table icon with no overlay - snow icon", () => {
        let retVal = stationIconSvc.GetIcon(null, '*');

        it("Should return an snow icon.", () => {
            assert.equal('*', retVal.icon.key);
            assert.equal('/AlternateTable/Snow.gif', retVal.icon.value);
            assert.equal('Snow', retVal.icon.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });

    describe("Should return a known alt table icon with an overlay.", () => {
        let retVal = stationIconSvc.GetIcon('0', 'T');

        it("Should return a Thunderstorm icon with overlay.", () => {
            assert.equal('T', retVal.icon.key);
            assert.equal('/AlternateTable/Thunderstorm.gif', retVal.icon.value);
            assert.equal('Thunderstorm', retVal.icon.name);
        });

        it("Should have an overlay - 0.", () => {
            should.exist(retVal.overlay);

            assert.equal('0', retVal.overlay.key);
            assert.equal('/Overlay/Zero.gif', retVal.overlay.value);

            should.not.exist(retVal.overlay.name);
        });
    });

    describe("Should return a known alt table icon.  Overlay invalid.", () => {
        let retVal = stationIconSvc.GetIcon('Ā', 'T');

        it("Should return a Thunderstorm icon with overlay.", () => {
            assert.equal('T', retVal.icon.key);
            assert.equal('/AlternateTable/Thunderstorm.gif', retVal.icon.value);
            assert.equal('Thunderstorm', retVal.icon.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });
});