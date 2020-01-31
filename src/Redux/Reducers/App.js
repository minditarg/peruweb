import { combineReducers } from "redux";
import { FETCHING, SUCCES, FAIL } from "../Acciones/Fetch";

const initialState = {
  isLoading: false,
  error: null,
  Mensaje:{
    type:'warning', /*success danger warning*/
    mensaje:'ta todo bien',
    visible:false

  }
};

function App(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return { isLoading: true, error: null , Mensaje:{
        type:'danger',
        mensaje:'ta todo bien',
        visible:false
    
      }};
    case SUCCES:
      return { isLoading: false, error: null, Mensaje:{
        type:'danger',
        mensaje:'ta todo bien',
        visible:false
    
      } };
    case FAIL:
      return { isLoading: false, error: action.error.toString(), Mensaje:{
        type:'danger',
        mensaje:action.error.toString(),
        visible:true
    
      } };
    default:
      return state;
  }
}
const reducer = combineReducers({
  App
});
export default reducer;
