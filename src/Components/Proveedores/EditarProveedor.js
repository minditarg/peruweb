import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import Select from "../Select/Select";

import {
  GET_EMPRESAS,
  UPDATE_EMPRESA,
  DELETE_EMPRESA,
  CREATE_EMPRESA,
  RESTORE_EMPRESA,
  GET_EMPRESAS_DELETED,
  SELECT_EMPRESA
} from "../../Redux/Acciones/EmpresasActions";

const EditarProveedor = props => {
  
  const formik = useFormik({
    initialValues: {
      Empresa: props.Empresa,
      Nombre: props.Empresa.nombre,
      Mail: props.Empresa.email,
      Telefono: props.Empresa.telefono,
      Direccion: props.Empresa.direccion,
      //Localidad: props.Empresa.localidad.nombre,
      Descripcion: props.Empresa.descripcion,
      Tipo: props.Empresa.tipo,
      NuevoTipo: props.Empresa.tipo
    },
    validationSchema: Yup.object({
      // Nombre: Yup.string()
      //   .min(3, "el nombre tiene que tener al menos 3 caracteres")
      //   .required("Obligatorio"),
      // Mail: Yup.string()
      //   .email("debe ingresar un email válido")
      //   .required("Obligatorio"),
      // Telefono: Yup.number().required("Obligatorio"),
      // Direccion: Yup.string()
      //   .min(3, "La dirección tiene que tener al menos 3 caracteres")
      //   .required("Obligatorio"),
      // //Localidad: Yup.string().required("Obligatorio"),
      // Descripcion: Yup.string()
      //   .min(3, "La Descripción tiene que tener al menos 3 caracteres")
      //   .required("Obligatorio"),
      // Tipo: Yup.string().required("Obligatorio")
    }),
    onSubmit: values => {
      store
        .dispatch(
          fetchApi(
            [UPDATE_EMPRESA, "SUCCES"],
            "/proveedor/cambiarTipo/"+ props.Empresa.id,
            { tipo: values.NuevoTipo.value },
            "POST"
          )
        )
        .then(() => {
          store.dispatch(fetchApi([GET_EMPRESAS, "SUCCES"], "/proveedores/listado"));
        })
        .then(props.history.push("/Proveedores"));
    }
  });
  const OpLocalidad = [
    { value: "Laprida", label: "Laprida" },
    { value: "Berisso", label: "Berisso" },
    { value: "La Plata", label: "La Plata" }
  ];
  const OpTipo = [
    { value: "Premium", label: "Premium" },
    { value: "Supervisado", label: "Supervisado" },
    { value: "Standar", label: "Standar" }
  ];

  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Proveedores </h6>
        </div>
        <div className="card-body">
          <form className="user" onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
                <input
                  className="form-control form-control-user"
                  placeholder="Nombre"
                  id="Nombre"
                  name="Nombre"
                  disabled
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
                  placeholder="Mail"
                  id="Mail"
                  name="Mail"
                  disabled
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
              <div className="col-sm-6 offset-md-3">
                <input
                  className="form-control form-control-user"
                  placeholder="Telefono"
                  id="Telefono"
                  disabled
                  name="Telefono"
                  type="number"
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
              <div className="col-sm-6 offset-md-3">
                <Select
                  idselect="Localidad"
                  options={OpLocalidad}
                  value={formik.values.Localidad}
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.topics}
                  touched={formik.touched.topics}
                />
                {formik.touched.Localidad && formik.errors.Localidad ? (
                  <div className="formError">{formik.errors.Localidad}</div>
                ) : null}
              </div>
            </div> */}
            <div className="form-group row">
              <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
                <input
                  className="form-control form-control-user"
                  placeholder="Direccion"
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
              <div className="col-sm-6 offset-md-3">
                <textarea
                  className="form-control form-control-user"
                  placeholder="Descripcion"
                  id="Descripcion"
                  name="Descripcion"
                  type="text"
                  disabled
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Descripcion}
                />
                {formik.touched.Descripcion && formik.errors.Descripcion ? (
                  <div className="formError">{formik.errors.Descripcion}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6 offset-md-3">
                <textarea
                  className="form-control form-control-user"
                  placeholder="Tipo"
                  id="Tipo"
                  name="Tipo"
                  type="text"
                  disabled
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Tipo}
                />
                {formik.touched.Tipo && formik.errors.DescripcioTipon ? (
                  <div className="formError">{formik.errors.Tipo}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group row">
            <div className="col-sm-6 offset-md-3">
              <h6 className="m-0 font-weight-bold text-primary">Cambiar el tipo </h6>
              </div>
            
              <div className="col-sm-6 offset-md-3">
                <Select
                  idselect="NuevoTipo"
                  options={OpTipo}
                  value={formik.values.NuevoTipo}
                  onChange={formik.setFieldValue}
                  placeholder="Seleccione el tipo"
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.topics}
                  touched={formik.touched.topics}
                />
                {formik.touched.NuevoTipo && formik.errors.NuevoTipo ? (
                  <div className="formError">{formik.errors.NuevoTipo}</div>
                ) : null}
              </div>
            </div>
            {/* <div className="form-group row">
              <div className=" col-sm-6 offset-md-3">
                <button className="btn btn-primary btn-user btn-block">
                  Resetear Contraseña
                </button>
              </div>
            </div> */}

            <div className="form-group row">
              <div className="col-sm-3 offset-md-3">
                <button className="btn btn-danger btn-user btn-block">
                  Cancelar
                </button>
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
const mapStateToProps = state => {
  return { App: state.App.App, Empresa: state.Empresas.Empresa };
};
export default connect(mapStateToProps)(EditarProveedor);
