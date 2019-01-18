import { PROMO_CODE } from '../actions/types';

const initialState = {
    open: false,
    value: 'casita'
};

export default function(state = initialState, action) {
    console.log(PROMO_CODE);
    //console.log(`->`, ...state);
    switch(action.type) {
        case PROMO_CODE:
            
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}