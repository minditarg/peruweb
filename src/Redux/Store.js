import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import User from "./Reducers/User";
import Empresas from "./Reducers/Empresas";
import Clientes from "./Reducers/Clientes";
import Categorias from "./Reducers/Categorias";
import Subcategorias from "./Reducers/Subcategorias";
import Localidades from "./Reducers/Localidades";
import App from "./Reducers/App";

const reducer = combineReducers({
  App,
  User,
  Empresas,
  Clientes,
  Categorias,
  Subcategorias,
  Localidades
});

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
