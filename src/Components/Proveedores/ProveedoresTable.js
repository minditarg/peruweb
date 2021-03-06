import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Table from "../Tables/Tables";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  GET_EMPRESAS,
  UPDATE_EMPRESA,
  DELETE_EMPRESA,
  CREATE_EMPRESA,
  RESTORE_EMPRESA,
  GET_EMPRESAS_DELETED,
  SELECT_EMPRESA
} from "../../Redux/Acciones/EmpresasActions";
class ProveedoresTable extends Component {
  constructor() {
    super();
    this.state = {
      Seleccionado: ""
    };
  }
  componentDidMount() {
    store.dispatch(fetchApi([GET_EMPRESAS, "SUCCES"], "/proveedores/listado"));
  }
  OpenModal(e) {
    this.setState({
      Seleccionado: e
    });
  }
  selectProveedor(proveedor) {
    store.dispatch({
      type: SELECT_EMPRESA,
      payload: proveedor
    });
    this.props.history.push("/Proveedores/" + proveedor.id);
  }
  eliminar() {
    store.dispatch(
      fetchApi(
        [DELETE_EMPRESA, "SUCCES"],
        "/proveedor/" + this.state.Seleccionado.id,
        {},
        "delete"
      )
    )
    .then(() => {
      store.dispatch(fetchApi([GET_EMPRESAS, "SUCCES"], "/proveedores/listado"));
    });
    
    
  }
  
  render() {
    if (this.props.App.isLoading) {
      return (
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Proveedores</h6>
              {/* <NavLink
                to="/NuevoProveedor"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nuevo Proveedor</span>
              </NavLink> */}
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
              <h6 className="m-0 font-weight-bold text-primary">Proveedores</h6>
              {/* <NavLink
                to="/NuevoProveedor"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nuevo Proveedor</span>
              </NavLink> */}
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  data={this.props.Empresas}
                  columns={this.tableColumns}
                  editable
                  eliminable
                  router={this.props.router}
                  editar={e => this.selectProveedor(e)}
                  eliminar={e => this.OpenModal(e)}
                ></Table>
              </div>
            </div>
          </div>
          <Modal
            seleccionadoid={this.state.Seleccionado.id}
            seleccionado={this.state.Seleccionado.nombre}
            aceptar={() => this.eliminar()}
            show={true}
            modalId="eliminar"
            nombre="regato"
          />
        </div>
      );
    }
  }
  tableColumns = [
    { title: "id", data: "id" },
    { title: "nombre", data: "nombre" },
    { title: "descripcion", data: "descripcion" },
    { title: "direccion", data: "direccion" },
    { title: "tipo", data: "tipo" },
    { title: "email", data: "email" }
  ];
}
const mapStateToProps = state => {
  // console.log(state.Empresas.empr.data);
  return { App: state.App.App, Empresas: state.Empresas.Empresas };
};
export default connect(mapStateToProps)(ProveedoresTable);
