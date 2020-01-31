import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  GET_CLIENTES,
  UPDATE_CLIENTE,
  DELETE_CLIENTE,
  CREATE_CLIENTE,
  RESTORE_CLIENTE,
  GET_CLIENTES_DELETED,
  SELECT_CLIENTE
} from "../../Redux/Acciones/ClientesActions";
const NuevoCliente = () => {
  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Mail: ""
    },
    validationSchema: Yup.object({
      Nombre: Yup.string()
        .min(3, "La Categoria tiene que tener al menos 3 caracteres")

        .required("Obligatorio"),
      Mail: Yup.string()
        .min(3, "La Categoria tiene que tener al menos 3 caracteres")
        .email("sebe ingresar un email valido")
        .required("Obligatorio")
    }),
    onSubmit: values => {
      store.dispatch(
        fetchApi(
          [CREATE_CLIENTE, "SUCCES"],
          "/cliente",
          {
            email: values.Mail,
            nombre: values.Nombre
          },
          "post"
        )
      );
    }
  });
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Nuevo Cliente </h6>
        </div>
        <div className="card-body">
          <form className="user" onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
                <input
                  className="form-control form-control-user"
                  placeholder="Mail"
                  id="Mail"
                  name="Mail"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Mail}
                />
                {formik.touched.Mail && formik.errors.Mail ? (
                  <div className="formError">{formik.errors.Mail}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group row">
              <div className=" col-sm-6 offset-md-3">
                <input
                  className="form-control form-control-user"
                  placeholder="Nombre"
                  id="Nombre"
                  name="Nombre"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Nombre}
                />
                {formik.touched.Nombre && formik.errors.Nombre ? (
                  <div className="formError">{formik.errors.Nombre}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group row">
              <div className=" col-sm-6 offset-md-3">
                <button className="btn btn-primary btn-user btn-block">
                  Resetear Contraseña
                </button>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-3 offset-md-3">
                <a href="#" className="btn btn-danger btn-user btn-block">
                  Cancelar
                </a>
              </div>
              <div className="col-sm-3 ">
                <button
                  type="submit"
                  className="btn btn-primary btn-user btn-block"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NuevoCliente;
