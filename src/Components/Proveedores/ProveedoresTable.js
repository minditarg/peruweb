import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Table from "../Tables/Tables";
class ProveedoresTable extends Component {
  render() {
    return (
      <div className="col-xl-12 col-lg-12">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Proveedores </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <Table
                data={this.dataSet}
                columns={this.tableColumns}
                editable
                eliminable
              ></Table>
            </div>
          </div>
        </div>
        <Modal modalId="eliminar" nombre="regato" />
      </div>
    );
  }
  tableColumns = [
    { title: "Proveedor" },
    { title: "Mail" },
    { title: "Telefono" },
    { title: "Direccion" },
    { title: "Localidad" },
    { title: "Tipo" }
  ];

  dataSet = [
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ],
    [
      "Garrett Winters",
      "mail@mail.com",
      "221560525",
      "1 142 3558",
      "La plata",
      "Premium"
    ]
  ];
}
export default ProveedoresTable;
