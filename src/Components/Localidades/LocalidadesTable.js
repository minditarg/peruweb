import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Table from "../Tables/Tables";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  GET_LOCALIDADES,
  UPDATE_LOCALIDAD,
  DELETE_LOCALIDAD,
  CREATE_LOCALIDAD,
  RESTORE_LOCALIDAD,
  GET_LOCALIDADES_DELETED,
  SELECT_LOCALIDAD
} from "../../Redux/Acciones/LocalidadesActions";
class LocalidadesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {   modalOpen:false};
  }
  componentDidMount() {
  
  
    store.dispatch(fetchApi([GET_LOCALIDADES, "SUCCES"], "/localidades"));
  }
  selectLocalidad(localidad) {
    store.dispatch({
      type: SELECT_LOCALIDAD,
      payload: localidad
    });
    this.props.history.push("/Localidades/" + localidad.id);
  }
  OpenModal(e) {
    this.setState({
      modalOpen:true,
      Seleccionado: e
    });
  }
  eliminar() {
    console.log("eliminando");
    store.dispatch(
      fetchApi(
        [DELETE_LOCALIDAD, "SUCCES"],
        "/localidades/" + this.state.Seleccionado.id,
        {},
        "delete"
      )
    )
    .then(()=> { store.dispatch(fetchApi([GET_LOCALIDADES, "SUCCES"], "/localidades")) } )
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
                to="/NuevaLocalidad"
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
                to="/NuevaLocalidad"
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
                  eliminar={e => this.OpenModal(e)}
                ></Table>
              </div>
            </div>
          </div>
          <Modal
            aceptar={() => this.eliminar()}
            show={this.state.modalOpen}
            modalId="eliminar"
          />
        </div>
      );
    }
  }
  tableColumns = [{ title: "Localidad", data: "nombre" }];
}
const mapStateToProps = state => {
  // console.log(state.Empresas.empr.data);
  return { App: state.App.App, Localidades: state.Localidades.Localidades };
};
export default connect(mapStateToProps)(LocalidadesTable);
