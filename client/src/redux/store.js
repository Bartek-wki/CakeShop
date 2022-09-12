import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

/* REDUCERS */
import cakes from './cakesRedux';
import pastries from './pastriesRedux';
import orders from './ordersRedux';

/* COMBINE REDUCERS */
const rootReducer = combineReducers({
  cakes,
  pastries,
  orders,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
