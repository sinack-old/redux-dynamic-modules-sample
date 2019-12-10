export const postMessage = message => ({
  type: "POST_MESSAGE",
  payload: {
    message,
  },
});
