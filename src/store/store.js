import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mealsReducer from './reducers/meals';

const rootReducer = combineReducers({
        meals:mealsReducer
});

export default createStore(rootReducer, composeWithDevTools());


//////////////// this redux-extension needs to be removed during the production