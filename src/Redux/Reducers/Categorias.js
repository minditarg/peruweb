import {
  GET_CATEGORIAS,
  UPDATE_CATEGORIA,
  DELETE_CATEGORIA,
  CREATE_CATEGORIA,
  RESTORE_CATEGORIA,
  GET_CATEGORIAS_DELETED,
  SELECT_CATEGORIA
} from "../Acciones/CategoriasActions";

const initialState =   {
  Categorias: "No hay Categorias",
  Categoria: "No hay categoria seleccionada",
  CategoriasDeleted: "no hay categorias eliminadas"
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CATEGORIAS: {
      return { ...state, Categorias: payload.data };
    }
    case SELECT_CATEGORIA: {
      return { ...state, Categoria: payload };
    }
    case GET_CATEGORIAS_DELETED: {
      return { ...state, CategoriasDeleted: payload.data };
    }
    case UPDATE_CATEGORIA: {
      return state;
    }
    case DELETE_CATEGORIA: {
      return state;
    }
    case CREATE_CATEGORIA: {
      return state;
    }
    case RESTORE_CATEGORIA: {
      return state;
    }
    default:
      return state;
  }
}
export default reducer;
