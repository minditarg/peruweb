import {
  GET_CLIENTES,
  UPDATE_CLIENTE,
  DELETE_CLIENTE,
  CREATE_CLIENTE,
  RESTORE_CLIENTE,
  GET_CLIENTES_DELETED,
  SELECT_CLIENTE
} from "../Acciones/ClientesActions";

const initialState = {
  Clientes: "No hay clientes",
  Cliente: "no hay Cliente seleccionada",
  ClientesDeleted: "no hay Clientes eliminadas"
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CLIENTES: {
      return { ...state, Clientes: payload.data };
    }
    case SELECT_CLIENTE: {
      return { ...state, Cliente: payload.data };
    }
    case GET_CLIENTES_DELETED: {
      return { ...state, ClientesDeleted: payload.data };
    }
    case UPDATE_CLIENTE: {
      return state;
    }
    case DELETE_CLIENTE: {
      return state;
    }
    case CREATE_CLIENTE: {
      return state;
    }
    case RESTORE_CLIENTE: {
      return state;
    }
    default:
      return state;
  }
}
export default reducer;
