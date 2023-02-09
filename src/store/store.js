import { configureStore } from '@reduxjs/toolkit';
import state from './reducers/';
import reduxThunk from 'redux-thunk';

const store = configureStore({
    reducer: state, middleware: [reduxThunk]
})

store.subscribe(() => {
    const state = store.getState();
    console.log(state,'--state')
})

export default store;