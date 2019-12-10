import couterReducer from "./reducer";

const counterModule = () => {
  return {
    id: "counter",
    reducerMap: {
      counter: couterReducer,
      // initialActions: [hogeAction()],
      // finalActions: [hugaAction()],
    },
  };
};
export default counterModule;
