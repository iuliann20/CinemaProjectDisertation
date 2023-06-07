import { applyMiddleware, combineReducers, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'middlewares/logger';
import reducers from 'reducers';
import thunk from 'redux-thunk';

export default function configureStore(history, initialState) {
  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history)
  });
  const loadedMiddlewares = [logger, thunk, routerMiddleware(history)];

  return createStore(rootReducer, initialState, applyMiddleware(...loadedMiddlewares));
}
