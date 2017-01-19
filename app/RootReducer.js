import { combineReducers } from 'redux';
import storeReducer from './store.reducer';
import serverUrl from './propsComponent/serverUrl.reducer';
import user from './login/login.reducer';
import routes from './routes.reducer';
import {LoadReducer 
		,initRoutesReducer
		,initTTReducer
		,initPayFormsReducer
		,initPriceListReducer
		,initTTPriceListReducer
		,initProductsReducer
		,initTTProductsReducer
		,initWareHouseReducer} from './load/Load.reducer';

export default rootReducer = combineReducers({
    // categories,
    storeReducer,
    serverUrl,
    user,
    routes,
    loaders:LoadReducer,
    Router:initRoutesReducer,
    TT:initTTReducer,
    PayForms:initPayFormsReducer,
    PriceList:initPriceListReducer,
    TTPriceList:initTTPriceListReducer,
    Products:initProductsReducer,
    TTProducts:initTTProductsReducer,
    WH:initWareHouseReducer,
});



