import React, { Component } from "react";

class EditarCategoria extends Component {
  render() {
    return (
      <div className="col-xl-12 col-lg-12">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Categoria</h6>
          </div>
          <div className="card-body">
            <form className="user">
              <div className="form-group row">
                <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="exampleFirstName"
                    placeholder="Nombre"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-3 offset-md-3">
                  <a href="#" className="btn btn-danger btn-user btn-block">
                    Cancelar
                  </a>
                </div>
                <div className="col-sm-3 ">
                  <a href="#" className="btn btn-primary btn-user btn-block">
                    Aceptar
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default EditarCategoria;
