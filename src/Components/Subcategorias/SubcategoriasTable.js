import React, { Component } from "react";
import Modal from "../Modal/Modal";
import { NavLink } from "react-router-dom";
class SubcategoriasTable extends Component {
  render() {
    return (
      <div className="col-xl-12 col-lg-12">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Subcategorias{" "}
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Subcategoria</th>
                    <th>Categoria Padre</th>

                    <th>Acciones</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Subcategoria</th>
                    <th>Categoria Padre</th>

                    <th>Acciones</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>

                    <td>
                      <NavLink
                        to="/Subcategorias/:3"
                        className="btn btn-warning btn-circle btn-sm
                        ActionButton"
                      >
                        <i className="fa fa-edit"></i>
                      </NavLink>
                      <a
                        href="#."
                        data-toggle="modal"
                        data-target="#eliminar"
                        className="btn btn-danger btn-circle btn-sm ActionButton"
                      >
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal modalId="eliminar" nombre="regato" />
      </div>
    );
  }
}
export default SubcategoriasTable;
