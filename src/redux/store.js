import { applyMiddleware, compose, createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./rootReducer";

const middleware = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const persiststore = persistStore(store);

export { store, persiststore };
