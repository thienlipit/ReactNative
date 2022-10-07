import React from 'react';
import { Provider } from 'react-redux';
import CounterApp from './src/screen/addNumberScreen/CounterApp';
import { store } from './src/screen/store/configureStore';

const App = () => {
    return (
        <Provider store={store}>
            <CounterApp />
        </Provider>

    );
};

export default App;