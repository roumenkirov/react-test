import { LOGIN } from '../action-types';

export const login = user => {
    return {
        type: LOGIN,
        payload: { ...user }
    }
};
