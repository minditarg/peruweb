const initialState = { token: "re" };
function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "logout":
      return initialState;
    case "login":
      return {
        token: payload.data.tokens,
        user: payload.data.user
      };
    default:
      return state;
  }
}
export default reducer;
