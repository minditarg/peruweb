const initialState = [];

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_DATA_CATEGORIAS": {
      return { ...state, data: payload.data };
    }
    default:
      return state;
  }
}
export default reducer;
