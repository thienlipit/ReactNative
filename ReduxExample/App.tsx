import React from 'react';
import { Provider } from 'react-redux';
import CounterApp from './src/screen/addNumberScreen/CounterApp';
import Counter from './src/screen/counter/counter';
import { store } from './src/store/configureStore';

const App = () => {
    return (
        <Provider store={store}>
            {/* <CounterApp /> */}
            <Counter />
        </Provider>

    );
};

export default App;