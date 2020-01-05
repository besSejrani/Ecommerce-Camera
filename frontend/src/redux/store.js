import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";

import { persistStore } from "redux-persist";
import reduxSaga from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleware = reduxSaga();

/**
|--------------------------------------------------
| EXPLANATION :
| 
| Only show the redux-devtools in developpement. 
|--------------------------------------------------
*/
let composeEnhancers;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = null || compose;
}

/**
|--------------------------------------------------
| EXPLANATION :
| 
| Passing the following data to the index.js file
| in the root
|--------------------------------------------------
*/
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);

/**
|--------------------------------------------------
| REDUX-SAGA : 
| 
| Redux-saga need to be run and executed after it
| it was added to the middlewares.
|--------------------------------------------------
*/
sagaMiddleware.run(rootSaga);
