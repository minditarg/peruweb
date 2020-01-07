import React, { Component } from "react";
const $ = require("jquery");
$.DataTable = require("datatables.net");

class Table extends Component {
  componentDidMount() {
    let columnas = this.props.columns;
    if (this.props.editable && !this.props.eliminable) {
      columnas = [
        ...this.props.columns,
        {
          mData: null,
          bSortable: false,
          mRender: function(data, type, full) {
            return '<a href="/Categorias/:3" class="btn btn-warning btn-circle btn-sm ActionButton"><i class="fa fa-edit"></i></a>';
          }
        }
      ];
    } else if (!this.props.editable && this.props.eliminable) {
      columnas = [
        ...this.props.columns,
        {
          mData: null,
          bSortable: false,
          mRender: function(data, type, full) {
            return '<a href="#." data-toggle="modal" data-target="#eliminar" class="btn btn-danger btn-circle btn-sm ActionButton" > <i class="fa fa-trash"></i> </a>';
          }
        }
      ];
    } else if (this.props.editable && this.props.eliminable) {
      columnas = [
        ...this.props.columns,
        {
          mData: "null",
          bSortable: false,
          mRender: function(data, type, full) {
            return (
              '<a href="/Categorias/:3" class="btn btn-warning btn-circle btn-sm ActionButton"><i class="fa fa-edit"></i></a>' +
              '<a href="#." data-toggle="modal" data-target="#eliminar" class="btn btn-danger btn-circle btn-sm ActionButton" > <i class="fa fa-trash"></i> </a>'
            );
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
