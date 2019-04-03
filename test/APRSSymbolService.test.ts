import * as chai from 'chai';
import APRSSymbolService from '../src/symbols/APRSSymbolService';

const assert = require('assert');
const should = chai.should();

describe('APRSSymbolService Tests', () => {
    let symbolSvc = new APRSSymbolService();

    describe("Should return crosshair with no overlay - unknown symbol", () => {
        let retVal = symbolSvc.GetAPRSSymbol('/', '}');

        it("Should return a crosshair symbol.", () => {
            assert.equal('', retVal.symbol.key);
            assert.equal('/Crosshair.gif', retVal.symbol.value);
            assert.equal('Crosshair', retVal.symbol.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });

    describe("Should return a known primary table symbol with no overlay - truck symbol", () => {
        let retVal = symbolSvc.GetAPRSSymbol('/', 'k');

        it("Should return a crosshair symbol.", () => {
            assert.equal('/k', retVal.symbol.key);
            assert.equal('/PrimaryTable/Truck.gif', retVal.symbol.value);
            assert.equal('Truck', retVal.symbol.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });

    describe("Should return a known alt table symbol with no overlay - snow symbol", () => {
        let retVal = symbolSvc.GetAPRSSymbol(null, '*');

        it("Should return an snow symbol.", () => {
            assert.equal('*', retVal.symbol.key);
            assert.equal('/AlternateTable/Snow.gif', retVal.symbol.value);
            assert.equal('Snow', retVal.symbol.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });

    describe("Should return a known alt table symbol with an overlay.", () => {
        let retVal = symbolSvc.GetAPRSSymbol('0', 'T');
        console.log(retVal.overlay);

        it("Should return a Thunderstorm symbol with overlay.", () => {
            assert.equal('T', retVal.symbol.key);
            assert.equal('/AlternateTable/Thunderstorm.gif', retVal.symbol.value);
            assert.equal('Thunderstorm', retVal.symbol.name);
        });

        it("Should have an overlay - 0.", () => {
            should.exist(retVal.overlay);

            assert.equal('0', retVal.overlay.key);
            assert.equal('/Overlay/Zero.gif', retVal.overlay.value);
            should.equal('0', retVal.overlay.name);
        });
    });

    describe("Should return a known alt table symbol.  Overlay invalid.", () => {
        let retVal = symbolSvc.GetAPRSSymbol('Ā', 'T');

        it("Should return a Thunderstorm symbol with overlay.", () => {
            assert.equal('T', retVal.symbol.key);
            assert.equal('/AlternateTable/Thunderstorm.gif', retVal.symbol.value);
            assert.equal('Thunderstorm', retVal.symbol.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });
});