import React, { useState } from 'react';
import {addMethod, subMethod} from './src/actions'
import {
    View
} from 'react-native';
import CounterApp from './src/CounterApp'
import { Provider } from 'react-redux';
import { store } from './src/configureStore'

store.subscribe( () => {
    console.log('state updated',store.getState)
})
store.dispatch(addMethod)

const App = () => {
    console.log('run here')
    store.subscribe(() => {
        console.log('state updated', store.getState)
    })
    store.dispatch(addMethod)
    return (
        <Provider store={store}>
            <CounterApp />
        </Provider>
        
    );
};

export default App;
