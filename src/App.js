import React from "react";
import "./App.css";
import "./Components/Header/Header";
import "./Components/Menu/Menu";
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import ProveedoresTable from "./Components/Proveedores/ProveedoresTable";
import Proveedor from "./Components/Proveedores/EditarProveedor";
import Footer from "./Components/Footer/Footer";
import Perfil from "./Components/Usuario/Perfil";
import ClientesTable from "./Components/Clientes/ClientesTable";
import ClienteEditar from "./Components/Clientes/EditarCliente";
import EditarCategoria from "./Components/Categorias/EditarCategoria";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CategoriasTable from "./Components/Categorias/CategoriasTable";
import SubcategoriasTable from "./Components/Subcategorias/SubcategoriasTable";
import EditarSubcategoria from "./Components/Subcategorias/EditarSubcategoria";
import LocalidadesTable from "./Components/Localidades/LocalidadesTable";
import EditarLocalidad from "./Components/Localidades/EditarLocalidad";
import ScGral from "./assets/scriptGral";
import Login from "./Components/Login/Login";
import Olvide from "./Components/Login/Olvide";
function App() {
  let logueado = false;

  if (logueado) {
    return (
      <BrowserRouter>
        <div className="App">
          <div id="wrapper">
            <Menu />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Header />
                <div className="container-fluid">
                  <div className="row">
                    <Switch>
                      <Route
                        exact
                        path="/Proveedores"
                        component={ProveedoresTable}
                      />
                      <Route
                        exact
                        path="/Proveedores/:id"
                        component={Proveedor}
                      />
                      <Route exact path="/Clientes" component={ClientesTable} />
                      <Route
                        exact
                        path="/Clientes/:id"
                        component={ClienteEditar}
                      />
                      <Route
                        exact
                        path="/Categorias"
                        component={CategoriasTable}
                      />
                      <Route
                        exact
                        path="/Categorias/:id"
                        component={EditarCategoria}
                      />
                      <Route
                        exact
                        path="/Subcategorias"
                        component={SubcategoriasTable}
                      />
                      <Route
                        exact
                        path="/Subcategorias/:id"
                        component={EditarSubcategoria}
                      />
                      <Route
                        exact
                        path="/Localidades"
                        component={LocalidadesTable}
                      />
                      <Route
                        exact
                        path="/Localidades/:id"
                        component={EditarLocalidad}
                      />
                      <Route exact path="/Perfil" component={Perfil} />
                      <Route path="/" component={ProveedoresTable} />
                    </Switch>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
          <a className="scrolltop" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>
        </div>

        <ScGral></ScGral>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Route exact path="/Olvide" component={Olvide} />
        <Route path="/Login" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
