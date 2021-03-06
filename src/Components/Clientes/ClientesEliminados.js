import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Table from "../Tables/Tables";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  GET_CLIENTES,
  UPDATE_CLIENTE,
  DELETE_CLIENTE,
  CREATE_CLIENTE,
  RESTORE_CLIENTE,
  GET_CLIENTES_DELETED,
  SELECT_CLIENTE
} from "../../Redux/Acciones/ClientesActions";
class ClientesEliminados extends Component {
  constructor() {
    super();
    this.state = {
      Seleccionado: ""
    };
  }
  componentDidMount() {
    store.dispatch(
      fetchApi([GET_CLIENTES_DELETED, "SUCCES"], "/cliente/eliminados")
    );
  }
  OpenModal(e) {
    this.setState({
      Seleccionado: e
    });
  }
  selectCliente(cliente) {
    store.dispatch({
      type: SELECT_CLIENTE,
      payload: cliente
    });
    this.props.history.push("/Clientes/" + cliente.id);
  }
  eliminar() {
    store.dispatch(
      fetchApi(
        [RESTORE_CLIENTE, "SUCCES"],
        "/cliente/restaurar/" + this.state.Seleccionado.id,
        {},
        "POST"
      )
    ).then( () => {
      store.dispatch(
        fetchApi([GET_CLIENTES_DELETED, "SUCCES"], "/clientes/eliminados")
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
                Clientes Eliminados{" "}
              </h6>
              <NavLink
                to="/NuevoCliente"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nuevo Cliente</span>
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
                Clientes Eliminados{" "}
              </h6>
              {/* <NavLink
                to="/NuevoCliente"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nuevo Cliente</span>
              </NavLink> */}
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  data={this.props.Clientes}
                  columns={this.tableColumns}
                  editable
                  restaurable
                  router={this.props.router}
                  eliminar={e => this.OpenModal(e)}
                  editar={e => this.selectCliente(e)}
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
    { title: "Cliente", data: "Usuario.nombre" },
    { title: "Mail", data: "Usuario.email" }
  ];
}
const mapStateToProps = state => {
  // console.log(state.Empresas.empr.data);
  return { App: state.App.App, Clientes: state.Clientes.ClientesDeleted };
};
export default connect(mapStateToProps)(ClientesEliminados);
