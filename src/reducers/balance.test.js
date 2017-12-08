import balanceReducer from './balance'
import * as constants from '../actions/constants'

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        const newState = { type: constants.SET_BALANCE, balance }

        expect(balanceReducer(undefined, newState )).toEqual(balance);
    })
})