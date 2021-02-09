import { createStore, applyMiddleware } from 'redux';
import { createRootReducer } from './state/reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './state/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(createRootReducer(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store;

