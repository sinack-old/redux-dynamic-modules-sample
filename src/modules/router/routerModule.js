import { routerReducer } from "./routerReducer";

export const routerModule = () => {
  return {
    id: "router",
    reducerMap: {
      router: routerReducer,
    },
  };
};
