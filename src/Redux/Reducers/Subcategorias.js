import {
  GET_SUBCATEGORIAS,
  UPDATE_SUBCATEGORIA,
  DELETE_SUBCATEGORIA,
  CREATE_SUBCATEGORIA,
  RESTORE_SUBCATEGORIA,
  GET_SUBCATEGORIAS_DELETED,
  SELECT_SUBCATEGORIA
} from "../Acciones/SubcategoriasActions";

const initialState = {
  Subcategorias: "No hay Subcategorias",
  Subcategoria: "no hay Subcategoria seleccionada",
  SubcategoriasDeleted: "no hay Subcategorias eliminadas"
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_SUBCATEGORIAS: {
      return { ...state, Subcategorias: payload.data };
    }
    case SELECT_SUBCATEGORIA: {
      return { ...state, Subcategoria: payload.data };
    }
    case GET_SUBCATEGORIAS_DELETED: {
      return { ...state, SubcategoriasDeleted: payload.data };
    }
    case UPDATE_SUBCATEGORIA: {
      return state;
    }
    case DELETE_SUBCATEGORIA: {
      return state;
    }
    case CREATE_SUBCATEGORIA: {
      return state;
    }
    case RESTORE_SUBCATEGORIA: {
      return state;
    }
    default:
      return state;
  }
}
export default reducer;
