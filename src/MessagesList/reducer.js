export default (state = [], action) => {
  switch (action.type) {
    case "POST_MESSAGE":
      return [...state, action.payload.message];
    default:
      return state;
  }
};
