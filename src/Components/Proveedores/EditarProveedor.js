import React, { Component } from "react";

class EditarProveedor extends Component {
  render() {
    return (
      <div className="col-xl-12 col-lg-12">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Proveedores </h6>
          </div>
          <div className="card-body">
            <form className="user">
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="exampleFirstName"
                    placeholder="Nombre"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control form-control-user"
                    id="exampleLastName"
                    placeholder="telefono"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <input
                    type="password"
                    className="form-control form-control-user"
                    id="exampleInputPassword"
                    placeholder="Password"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="password"
                    className="form-control form-control-user"
                    id="exampleRepeatPassword"
                    placeholder="Repeat Password"
                  />
                </div>
              </div>
              <a
                href="login.html"
                className="btn btn-primary btn-user btn-block"
              >
                Register Account
              </a>
              <hr />
              <a
                href="index.html"
                className="btn btn-google btn-user btn-block"
              >
                <i className="fab fa-google fa-fw"></i> Register with Google
              </a>
              <a
                href="index.html"
                className="btn btn-facebook btn-user btn-block"
              >
                <i className="fab fa-facebook-f fa-fw"></i> Register with
                Facebook
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default EditarProveedor;
