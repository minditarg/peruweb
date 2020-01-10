import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

import "./login.css";
const Olvide = () => {
  const formik = useFormik({
    initialValues: {
      Mail: ""
    },
    validationSchema: Yup.object({
      Mail: Yup.string()
        .email("debe ingresar un mail válido")
        .required("Obligatorio")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Olvidaste tu contraseña?!
                      </h1>
                      <p class="mb-4">
                        Ingresa tu email y te enviamos un código para recuperar
                        tu contraseña!
                      </p>
                    </div>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group">
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

                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Enviar
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <NavLink
                        to="/Login"
                        activeClassName="active"
                        className="small"
                      >
                        <span>Volver al inicio</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Olvide;
