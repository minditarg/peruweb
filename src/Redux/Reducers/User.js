const initialState = {
  token: ""
};
function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "logout":
      return initialState;
    case "login":
      return {
        token: payload.data.tokens,
        user: payload
      };
    case "Salir":
      return {
        token: payload.data.tokens,
        user: payload,
        salir: "salio"
      };
    default:
      return state;
  }
}
export default reducer;
