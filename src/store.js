import { createStore } from "redux-dynamic-modules";
// import { getSagaExtension } from "redux-dynamic-modules-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose } from "redux";
import { routerModule } from "./modules/router/routerModule";

export const history = createBrowserHistory();

export const configureStore = (preloadedState = {}) => {
  return createStore(
    {
      initialState: preloadedState,
      enhancers: [compose(applyMiddleware(routerMiddleware(history)))],
      // extensions: [getSagaExtension()],
    },
    routerModule()
  );
};

export default configureStore;
