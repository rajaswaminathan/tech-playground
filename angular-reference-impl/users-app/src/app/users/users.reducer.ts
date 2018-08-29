import { AppState } from './app.state';
import { Action, Reducer, AnyAction } from 'redux';

const initialState = {};

 export const userReducer: Reducer<any> =
        (state = initialState, action: AnyAction) => {

    switch ( action.type ) {

        case 'USER_CREATED':
            return Object.assign({}, state, {createUserForm: action.payload});
        default:
            return state;
    }
 };

 export const loadUserForEdit: Reducer<any> =
        (state = initialState, action: AnyAction) => {

    switch ( action.type ) {

        case 'USER_LOADED':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
 };

