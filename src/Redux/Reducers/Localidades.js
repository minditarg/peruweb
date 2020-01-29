import {
  GET_LOCALIDADES,
  UPDATE_LOCALIDAD,
  DELETE_LOCALIDAD,
  CREATE_LOCALIDAD,
  RESTORE_LOCALIDAD,
  GET_LOCALIDADES_DELETED,
  SELECT_LOCALIDAD
} from "../Acciones/LocalidadesActions";

const initialState = {
  Localidades: "No hay Localidades",
  Localidad: "no hay Localidad seleccionada",
  LocalidadesDeleted: "no hay Localidades eliminadas"
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_LOCALIDADES: {
      return { ...state, Localidades: payload.data };
    }
    case SELECT_LOCALIDAD: {
      return { ...state, Localidad: payload.data };
    }
    case GET_LOCALIDADES_DELETED: {
      return { ...state, LocalidadesDeleted: payload.data };
    }
    case UPDATE_LOCALIDAD: {
      return state;
    }
    case DELETE_LOCALIDAD: {
      return state;
    }
    case CREATE_LOCALIDAD: {
      return state;
    }
    case RESTORE_LOCALIDAD: {
      return state;
    }
    default:
      return state;
  }
}
export default reducer;
