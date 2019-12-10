import couterReducer from "./reducer";

const counterModule = () => {
  return {
    id: "counter",
    reducerMap: {
      counter: couterReducer,
    },
  };
};
export default counterModule;
