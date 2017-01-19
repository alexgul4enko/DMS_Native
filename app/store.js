import { persistStore, autoRehydrate } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import createLogger from 'redux-logger';
import rootReducer from './RootReducer';
import thunk from 'redux-thunk';
const logger = createLogger();

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    autoRehydrate()
));


	persistStore(store, { storage: AsyncStorage });


export default store;













