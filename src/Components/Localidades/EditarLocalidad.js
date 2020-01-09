import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const EditarLocalidad = () => {
  const formik = useFormik({
    initialValues: {
      Localidad: ""
    },
    validationSchema: Yup.object({
      Localidad: Yup.string()
        .min(3, "La Localidad tiene que tener al menos 3 caracteres")
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
          <h6 className="m-0 font-weight-bold text-primary">Localidad</h6>
        </div>
        <div className="card-body"></div>

        <form className="user" onSubmit={formik.handleSubmit}>
          <div className="form-group row">
            <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
              <input
                className="form-control form-control-user"
                placeholder="Localidad"
                id="Localidad"
                name="Localidad"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Localidad}
              />
              {formik.touched.Localidad && formik.errors.Localidad ? (
                <div>{formik.errors.Localidad}</div>
              ) : null}
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
  );
};
export default EditarLocalidad;
