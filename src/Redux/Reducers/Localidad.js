const initialState = [];

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SELECT_LOCALIDAD":
      return {
        Seleccionada: payload
      };
    case "UPDATE_LOCALIDAD":
      return state;
    default:
      return state;
  }
}
export default reducer;
