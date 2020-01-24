import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Table from "../Tables/Tables";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class ProveedoresTable extends Component {
  constructor() {
    super();
    this.state = {
      Seleccionado: ""
    };
  }
  componentDidMount() {
    store.dispatch(
      fetchApi(["GET_DATA_EMPRESA", "SUCCES"], "/proveedores/listado")
    );
  }
  OpenModal(e) {
    this.setState({
      Seleccionado: e
    });
  }
  eliminar() {
    console.log("eliminando");
    store.dispatch(
      fetchApi(
        ["DELETE_PROVEEDOR", "SUCCES"],
        "/proveedor/" + this.state.Seleccionado.id,
        {},
        "DELETE"
      )
    );
    store.dispatch(
      fetchApi(["GET_DATA_EMPRESA", "SUCCES"], "/proveedores/listado")
    );
  }
  render() {
    if (this.props.App.isLoading) {
      return (
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Proveedores</h6>
              <NavLink
                to="/addProvedor"
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
              <h6 className="m-0 font-weight-bold text-primary">Proveedores</h6>
              <NavLink
                to="/addProvedor"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nuevo Proveedor</span>
              </NavLink>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  data={this.props.Empresas}
                  columns={this.tableColumns}
                  editable
                  eliminable
                  router={this.props.router}
                  editar={e => this.props.history.push("/Proveedores/" + e)}
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
  return { App: state.App.App, Empresas: state.Empresas.data };
};
export default connect(mapStateToProps)(ProveedoresTable);
