import { LOGIN } from '../action-types'

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload;
        default:
            return state;
    }
}
