import { createStore, applyMiddleware, compose } from 'redux';
import { createRootReducer } from './state/reducers';
import createSagaMiddleware from 'redux-saga';
import { apiMiddleware } from 'redux-api-middleware';
import rootSaga from './state/sagas';


const enhancers = [];

const sagaMiddleware = createSagaMiddleware();
const middlewares = [apiMiddleware, sagaMiddleware];

const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);
const store = createStore(createRootReducer(), {}, composedEnhancers);
sagaMiddleware.run(rootSaga);

export default store;