import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './appReducer';
import logger from 'redux-logger';

export const appStore= configureStore({ 

    reducer: {

        appReducer      // or appReducer:appReducer
    },

    middleware : () => {

        return [logger]

    }
});