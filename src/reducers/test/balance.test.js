import balanceReducer from '../balance'
import balanceReducer2 from '../balance'
import * as constants from '../../actions/constants'

describe('balanceReducer', () => {

    describe('when initializing', () => {
        const balance = 10;
        
        it('sets a balance', () => {
            const newState = { type: constants.SET_BALANCE, balance }
    
            expect(balanceReducer(undefined, newState )).toEqual(balance);
        })
    
        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance)
            })
        })
    })

    it('deposits into te balance', () => {
        const deposit = 10,
              initialState = 5;
        
        const newState = { type: constants.DEPOSIT, deposit }
              
        expect(balanceReducer(initialState, newState)).toEqual(initialState + deposit);
    })

    it('withdraw into te balance', () => {
        const withdraw = 2,
              initialState = 10;
        
        const newState = { type: constants.WITHDRAW, withdraw }
              
        expect(balanceReducer(initialState, newState)).toEqual(initialState - withdraw);
    })
})