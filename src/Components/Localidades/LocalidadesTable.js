import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Table from "../Tables/Tables";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class LocalidadesTable extends Component {
  componentDidMount() {
    store.dispatch(
      fetchApi(["GET_DATA_LOCALIDADES", "SUCCES"], "/localidades")
    );
  }
  selectLocalidad(localidad) {
    store.dispatch({
      type: "SELECT_LOCALIDAD",
      payload: localidad
    });
    this.props.history.push("/Localidades/" + localidad.id);
  }
  render() {
    if (this.props.App.isLoading) {
      return (
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Localidades{" "}
              </h6>
              <NavLink
                to="/addProvedor"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nueva Localidad</span>
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
                Localidades{" "}
              </h6>
              <NavLink
                to="/addProvedor"
                className="btn btn-primary btn-icon-split"
              >
                <span className="icon text-white-50">
                  <i className="fas fa-plus"></i>
                </span>
                <span className="text">Nueva Localidad</span>
              </NavLink>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  data={this.props.Localidades}
                  columns={this.tableColumns}
                  editable
                  eliminable
                  router={this.props.router}
                  editar={e => this.selectLocalidad(e)}
                ></Table>
              </div>
            </div>
          </div>
          <Modal modalId="eliminar" nombre="regato" />
        </div>
      );
    }
  }
  tableColumns = [{ title: "Localidad", data: "nombre" }];
}
const mapStateToProps = state => {
  // console.log(state.Empresas.empr.data);
  return { App: state.App.App, Localidades: state.Localidades.data };
};
export default connect(mapStateToProps)(LocalidadesTable);
