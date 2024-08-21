import {formatMoney} from '../Scripts//utils/money.js';

describe('test suite: formatMoney', () => {
    it('converts cents into dollars', () => {
        expect(formatMoney(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(formatMoney(0)).toEqual('0.00');
    });

    it('with rounding off', () => {
        expect(formatMoney(2000.5)).toEqual('20.01');
    });
});