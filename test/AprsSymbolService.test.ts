import * as chai from 'chai';
import { APRSSymbolService } from '../src/symbols/APRSSymbolService';

const assert = chai.assert;
const should = chai.should();

describe('APRSSymbolService Tests', () => {
    let symbolSvc = new APRSSymbolService();

    describe("Should return crosshair with no overlay - unknown symbol", () => {
        let retVal = symbolSvc.GetAPRSSymbol('}', '/');

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
        let retVal = symbolSvc.GetAPRSSymbol('k', '/');

        it("Should return a truck symbol.", () => {
            assert.equal('/k', retVal.symbol.key);
            assert.equal('/PrimaryTable/Truck.gif', retVal.symbol.value);
            assert.equal('Truck', retVal.symbol.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });

    describe("Should return a known alt table symbol with no overlay - snow symbol", () => {
        let retVal = symbolSvc.GetAPRSSymbol('*', null);

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
        let retVal = symbolSvc.GetAPRSSymbol('T', '0');

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
        let retVal = symbolSvc.GetAPRSSymbol('T', 'Ā');

        it("Should return a Thunderstorm symbol with overlay.", () => {
            assert.equal('T', retVal.symbol.key);
            assert.equal('/AlternateTable/Thunderstorm.gif', retVal.symbol.value);
            assert.equal('Thunderstorm', retVal.symbol.name);
        });

        it("Should not have an overlay.", () => {
            should.not.exist(retVal.overlay);
        });
    });

    describe("Get all overlays tests.", () => {
        let overlays = symbolSvc.GetOverlays();

        describe("Should return a list of overlays.", () => {
            assert.exists(overlays);
        });
    });

    describe("Get all symbols tests.", () => {
        let symbols = symbolSvc.GetSymbols();

        describe("Should return a list of symbols.", () => {
            assert.exists(symbols);
        });
    });

    describe("Tests for finding symbols by key.", () => {
        describe("Should return a police department symbol.", () => {
            let symbol = symbolSvc.GetSymbolByKey('/!');

            assert.equal('/!', symbol.key)
        });

        describe("Should not return a symbol.", () => {
            let symbol = symbolSvc.GetSymbolByKey('/!9');

            it("Should return a crosshair symbol.", () => {
                assert.equal('', symbol.key);
                assert.equal('/Crosshair.gif', symbol.value);
                assert.equal('Crosshair', symbol.name);
            });
        });
    });
});