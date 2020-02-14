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
class ProveedoresEliminados extends Component {
  constructor() {
    super();
    this.state = {
      Seleccionado: ""
    };
  }
  componentDidMount() {
    store.dispatch(
      fetchApi([GET_EMPRESAS_DELETED, "SUCCES"], "/proveedores/eliminados")
    );
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
        [RESTORE_EMPRESA, "SUCCES"],
        "/proveedor/restaurar/" + this.state.Seleccionado.id,
        {},
        "POST"
      )
    ).then( () => {
      store.dispatch(
        fetchApi([GET_EMPRESAS_DELETED, "SUCCES"], "/proveedores/eliminados")
      );
    }
    );
    
  }
  render() {
    if (this.props.App.isLoading) {
      return (
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Proveedores Eliminados
              </h6>
              <NavLink
                to="/NuevoProveedor"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nuevo Proveedor</span>
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
              <h6 className="m-0 font-weight-bold text-primary">
                Proveedores Eliminados
              </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  data={this.props.Empresas}
                  columns={this.tableColumns}
                  editable
                  restaurable
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
            modalId="restaurar"
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
  return { App: state.App.App, Empresas: state.Empresas.EmpresasDeleted };
};
export default connect(mapStateToProps)(ProveedoresEliminados);
