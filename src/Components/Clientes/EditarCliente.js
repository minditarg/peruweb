import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";


const EditarCliente = props => {
  const formik = useFormik({
    initialValues: {
      Nombre: props.Cliente.Usuario.nombre,
      Telefono: props.Cliente.telefono,
      Direccion: props.Cliente.direccion,
      Mail: props.Cliente.Usuario.email,
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
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Clientes </h6>
        </div>
        <div className="card-body">
          <form className="user" onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
                <input
                  className="form-control form-control-user"
                  placeholder="Mail"
                  id="Mail"
                  disabled
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
                  disabled
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
                <input
                  className="form-control form-control-user"
                  placeholder="Nombre"
                  id="Direccion"
                  disabled
                  name="Direccion"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Direccion}
                />
                {formik.touched.Direccion && formik.errors.Direccion ? (
                  <div className="formError">{formik.errors.Direccion}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group row">
              <div className=" col-sm-6 offset-md-3">
                <input
                  className="form-control form-control-user"
                  placeholder="Telefono"
                  id="Telefono"
                  disabled
                  name="Telefono"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Telefono}
                />
                {formik.touched.Telefono && formik.errors.Telefono ? (
                  <div className="formError">{formik.errors.Telefono}</div>
                ) : null}
              </div>
            </div>
            {/* <div className="form-group row">
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
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { App: state.App.App, Cliente: state.Clientes.Cliente };
};
export default connect(mapStateToProps)(EditarCliente);
