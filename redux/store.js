import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./root-reducer";

const middlewares = [thunk];

export const initializeStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
