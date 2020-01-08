import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Table from "../Tables/Tables";
import { NavLink } from "react-router-dom";

class ClientesTable extends Component {
  render() {
    return (
      <div className="col-xl-12 col-lg-12">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Clientes </h6>
            <NavLink
              to="/addProvedor"
              className="btn btn-primary btn-icon-split"
            >
              <span className="icon text-white-50">
                <i className="fas fa-plus"></i>
              </span>
              <span className="text">Nuevo Cliente</span>
            </NavLink>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <Table
                data={this.dataSet}
                columns={this.tableColumns}
                editable
                eliminable
                router={this.props.router}
                editar={e => this.props.history.push("/Clientes/" + e)}
              ></Table>
            </div>
          </div>
        </div>
        <Modal modalId="eliminar" nombre="regato" />
      </div>
    );
  }

  tableColumns = [{ title: "Cliente" }, { title: "Mail" }];

  dataSet = [
    ["Garrett Winters", "mail@mail.com"],
    ["Garrett Winters", "mail@mail.com"]
  ];
}
export default ClientesTable;
