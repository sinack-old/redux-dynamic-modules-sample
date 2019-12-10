import messagesListReducer from "./reducer";

const messagesListModule = () => {
  return {
    id: "messagesList",
    reducerMap: {
      messagesList: messagesListReducer,
    },
  };
};
export default messagesListModule;
