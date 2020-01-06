import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id={this.props.modalId}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Eliminar {this.props.nombre}
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Desea eliminar el proveedor "nombreDelProveedor?.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <a className="btn btn-primary" href="login.html">
                Si, eliminalo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
