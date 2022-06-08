import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

/* REDUCERS */
import cakes from './cakesRedux';
import pastries from './pastriesRedux';

/* COMBINE REDUCERS */
const rootReducer = combineReducers({
  cakes,
  pastries,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
