const initialState = {
  loading: "asdf",
  error: null
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "init":
      return initialState;
    case "error":
      return {
        loading: false,
        error: payload
      };
    case "pendiente":
      debugger;
      return {
        loading: true,
        error: payload
      };
    default:
      return state;
  }
}
export default reducer;
