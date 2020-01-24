import React, { Component } from "react";
import ReactDOM from "react-dom";
const $ = require("jquery");
$.DataTable = require("datatables.net");

class Table extends Component {
  editarBtn(td, cellData) {
    ReactDOM.render(
      <a
        onClick={() => this.props.editar(cellData)}
        className="btn btn-warning btn-circle btn-sm ActionButton white"
      >
        <i className="fa fa-edit"></i>
      </a>,
      td
    );
  }

  eliminarBtn(td, cellData) {
    ReactDOM.render(
      <a
        onClick={() => this.props.eliminar(cellData)}
        data-toggle="modal"
        data-target="#eliminar"
        className="btn btn-danger btn-circle btn-sm ActionButton white"
      >
        <i className="fa fa-trash"></i>
      </a>,
      td
    );
  }
  ambosBtns(td, cellData) {
    ReactDOM.render(
      <span>
        <a
          onClick={() => this.props.editar(cellData)}
          className="btn btn-warning btn-circle btn-sm ActionButton white"
        >
          <i className="fa fa-edit"></i>
        </a>
        <a
          onClick={() => this.props.eliminar(cellData)}
          data-toggle="modal"
          data-target="#eliminar"
          className="btn btn-danger btn-circle btn-sm ActionButton white"
        >
          <i className="fa fa-trash"></i>
        </a>
      </span>,
      td
    );
  }

  componentDidMount() {
    let columnas = this.props.columns;
    if (this.props.editable && !this.props.eliminable) {
      columnas = [
        ...this.props.columns,
        {
          title: "Acciones",
          mData: null,
          bSortable: false,
          createdCell: (td, cellData) => {
            this.editarBtn(td, cellData);
          }
        }
      ];
    } else if (!this.props.editable && this.props.eliminable) {
      columnas = [
        ...this.props.columns,
        {
          title: "Acciones",
          mData: null,
          bSortable: false,
          createdCell: (td, cellData) => {
            this.eliminarBtn(td, cellData);
          }
        }
      ];
    } else if (this.props.editable && this.props.eliminable) {
      columnas = [
        ...this.props.columns,
        {
          title: "Acciones",
          mData: null,
          bSortable: false,
          createdCell: (td, cellData) => {
            this.ambosBtns(td, cellData);
          }
        }
      ];
    }

    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.props.data,
      columns: columnas
    });
  }
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <table
          id="example"
          className="table table-bordered"
          width="100%"
          ref={el => (this.el = el)}
        ></table>
      </div>
    );
  }
}
export default Table;
