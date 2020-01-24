import { combineReducers } from "redux";
import { FETCHING, SUCCES, FAIL } from "../Acciones/Fetch";

const initialState = {
  isLoading: false,
  error: null
};

function App(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return { isLoading: true, error: null };
    case SUCCES:
      return { isLoading: false, error: null };
    case FAIL:
      return { isLoading: false, error: action.error.toString() };
    default:
      return state;
  }
}
const reducer = combineReducers({
  App
});
export default reducer;
