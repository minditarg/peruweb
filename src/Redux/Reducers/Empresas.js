import {
  GET_EMPRESAS,
  UPDATE_EMPRESA,
  DELETE_EMPRESA,
  CREATE_EMPRESA,
  RESTORE_EMPRESA,
  GET_EMPRESAS_DELETED,
  SELECT_EMPRESA
} from "../Acciones/EmpresasActions";

const initialState = {
  Empresas: [],
  Empresa: "no hay empresa seleccionada",
  EmpresasDeleted: []
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_EMPRESAS: {
      return { ...state, Empresas: payload.data };
    }
    case SELECT_EMPRESA: {
      return { ...state, Empresa: payload.data };
    }
    case GET_EMPRESAS_DELETED: {
      return { ...state, EmpresasDeleted: payload.data };
    }
    case UPDATE_EMPRESA: {
      return state;
    }
    case DELETE_EMPRESA: {
      return state;
    }
    case CREATE_EMPRESA: {
      return state;
    }
    case RESTORE_EMPRESA: {
      return state;
    }
    default:
      return state;
  }
}
export default reducer;
