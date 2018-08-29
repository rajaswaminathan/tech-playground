import { Store, createStore, compose, StoreEnhancer } from 'redux';
import { userReducer } from './users.reducer';
import { InjectionToken } from '@angular/core';
import { AppState } from './app.state';

const devtools: StoreEnhancer<AppState> =
 window['devToolsExtension'] ?
 window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {

    return createStore (userReducer, compose(devtools));

}

export const AppStore = new InjectionToken('App.store');

export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
];
