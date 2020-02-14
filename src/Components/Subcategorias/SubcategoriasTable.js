import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Table from "../Tables/Tables";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  GET_CATEGORIAS
} from "../../Redux/Acciones/CategoriasActions";

import {
  GET_SUBCATEGORIAS,
  UPDATE_SUBCATEGORIAS,
  DELETE_SUBCATEGORIA,
  CREATE_SUBCATEGORIAS,
  RESTORE_SUBCATEGORIAS,
  GET_SUBCATEGORIAS_DELETED,
  SELECT_SUBCATEGORIA
} from "../../Redux/Acciones/SubcategoriasActions";
class SubcategoriasTable extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, Seleccionado: { nombre: "", id: "" } };
  }
  componentDidMount() {
    store.dispatch(fetchApi([GET_SUBCATEGORIAS, "SUCCES"], "/subcategorias"));
    store.dispatch(fetchApi([GET_CATEGORIAS, "SUCCES"], "/categorias"));
  }
  selectSubcategoria(subcategoria) {
    store.dispatch({
      type: SELECT_SUBCATEGORIA,
      payload: subcategoria
    });
    this.props.history.push("/Subcategorias/" + subcategoria.id);
  }
  OpenModal(e) {
    this.setState({
      modalOpen:true,
      Seleccionado: e
    });
  }
  eliminar() {
    store.dispatch(
      fetchApi(
        [DELETE_SUBCATEGORIA, "SUCCES"],
        "/subcategorias/" + this.state.Seleccionado.id,
        {},
        "delete"
      )
    )
    .then(()=> { store.dispatch(fetchApi([GET_SUBCATEGORIAS, "SUCCES"], "/subcategorias")) } );
  }
  render() {
    if (this.props.App.isLoading) {
      return (
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Subcategorias
              </h6>
              <NavLink
                to="/NuevaSubcategoria"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nueva Subcategoria</span>
              </NavLink>
            </div>
            <div className="card-body">
              <div className="table-responsive">LOADING...</div>
            </div>
          </div>
          <Modal modalId="eliminar" nombre="regato" />
        </div>
      );
    } else {
      return (
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Subcategorias
              </h6>
              <NavLink
                to="/NuevaSubcategoria"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nueva Subcategoria</span>
              </NavLink>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  data={this.props.Subategorias}
                  columns={this.tableColumns}
                  editable
                  eliminable
                  router={this.props.router}
                  eliminar={e => this.OpenModal(e)}
                  editar={e => this.selectSubcategoria(e)}
                ></Table>
              </div>
            </div>
          </div>
          <Modal
            elemento="la SUBcategoria"
            seleccionado={this.state.Seleccionado.nombre}
            aceptar={() => this.eliminar()}
            show={this.state.modalOpen}
            modalId="eliminar"
          />
        </div>
      );
    }
  }

  tableColumns = [
    { title: "Subcategoria", data: "nombre" },
    { title: "Categoria Padre", data: "categoria.nombre" }
  ];
}
const mapStateToProps = state => {
  console.log(state);
  return { App: state.App.App, Subategorias: state.Subcategorias.Subcategorias };
};
export default connect(mapStateToProps)(SubcategoriasTable);
