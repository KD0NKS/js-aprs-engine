import * as chai from 'chai';
import StringUtil from '../src/util/StringUtil';

const assert = require('assert');
const should = chai.should();

describe('StringUtil Tests', () => {
    it("Should return true when value is null.", () => {
        assert.equal(true, StringUtil.IsNullOrWhiteSpace(null));
    });

    it("Should return true when value is empty string.", () => {
        assert.equal(true, StringUtil.IsNullOrWhiteSpace(' '));
    });

    it('Should return false when value is not null or empty.', () => {
        assert.equal(false, StringUtil.IsNullOrWhiteSpace('test'));
    });
});