import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "../Select/Select";
const EditarProveedor = () => {
  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Mail: "",
      Telefono: "",
      Direccion: "",
      Localidad: "",
      Descripcion: "",
      Tipo: ""
    },
    validationSchema: Yup.object({
      Nombre: Yup.string()
        .min(3, "el nombre tiene que tener al menos 3 caracteres")
        .required("Obligatorio"),
      Mail: Yup.string()
        .email("debe ingresar un email válido")
        .required("Obligatorio"),
      Telefono: Yup.number().required("Obligatorio"),
      Direccion: Yup.string()
        .min(3, "La dirección tiene que tener al menos 3 caracteres")
        .required("Obligatorio"),
      Localidad: Yup.string().required("Obligatorio"),
      Descripcion: Yup.string()
        .min(3, "La Descripción tiene que tener al menos 3 caracteres")
        .required("Obligatorio"),
      Tipo: Yup.string().required("Obligatorio")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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
    { value: "Standard", label: "Standard" }
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
            <div className="form-group row">
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
            </div>
            <div className="form-group row">
              <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
                <input
                  className="form-control form-control-user"
                  placeholder="Direccion"
                  id="Direccion"
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
                <Select
                  idselect="Tipo"
                  options={OpTipo}
                  value={formik.values.Tipo}
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.topics}
                  touched={formik.touched.topics}
                />
                {formik.touched.Tipo && formik.errors.Tipo ? (
                  <div className="formError">{formik.errors.Tipo}</div>
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
export default EditarProveedor;
