import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Table from "../Tables/Tables";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  GET_CATEGORIAS,
  UPDATE_CATEGORIA,
  DELETE_CATEGORIA,
  CREATE_CATEGORIA,
  RESTORE_CATEGORIA,
  GET_CATEGORIAS_DELETED,
  SELECT_CATEGORIA
} from "../../Redux/Acciones/CategoriasActions";

class CategoriasTable extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    store.dispatch(fetchApi([GET_CATEGORIAS, "SUCCES"], "/categorias"));
  }

  render() {
    if (this.props.App.isLoading) {
      return (
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Categorias </h6>
              <NavLink
                to="/addProvedor"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nueva Categoría</span>
              </NavLink>
            </div>
            <div className="card-body">
              <div className="table-responsive">LOADING....</div>
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
              <h6 className="m-0 font-weight-bold text-primary">Categorias </h6>
              <NavLink
                to="/addProvedor"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nueva Categoría</span>
              </NavLink>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  data={this.props.Categorias}
                  columns={this.tableColumns}
                  editable
                  eliminable
                  router={this.props.router}
                  editar={e => this.props.history.push("/Categorias/" + e)}
                ></Table>
              </div>
            </div>
          </div>
          <Modal modalId="eliminar" nombre="regato" />
        </div>
      );
    }
  }
  tableColumns = [{ title: "Categoria", data: "nombre" }];
}
const mapStateToProps = state => {
  return { App: state.App.App, Categorias: state.Categorias.Categorias };
};
export default connect(mapStateToProps)(CategoriasTable);
