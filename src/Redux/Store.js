import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import User from "./Reducers/User";
import Empresas from "./Reducers/Empresas";
import Clientes from "./Reducers/Clientes";
import Empresa from "./Reducers/Empresa";
import Cliente from "./Reducers/Cliente";
import Categorias from "./Reducers/Categorias";
import Categoria from "./Reducers/Categoria";
import Subcategorias from "./Reducers/Subcategorias";

import Subcategoria from "./Reducers/Subcategoria";

import Localidades from "./Reducers/Localidades";
import Localidad from "./Reducers/Localidad";
import App from "./Reducers/App";

const reducer = combineReducers({
  App,
  User,
  Empresas,
  Clientes,
  Empresa,
  Cliente,
  Categorias,
  Categoria,
  Subcategorias,
  Subcategoria,
  Localidades,
  Localidad
});

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
