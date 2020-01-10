import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { LOAD_TOKEN_USER } from "../../Actions/actionsTypes";
import * as session from "../../Services/session";
import * as api from "../../Services/api";

import "./login.css";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      Mail: "",
      Pass: ""
    },
    validationSchema: Yup.object({
      Mail: Yup.string()
        .email("debe ingresar un mail válido")
        .required("Obligatorio"),
      Pass: Yup.string().required("Obligatorio")
    }),
    onSubmit: values => {
      session
        .authenticate(values.Mail, values.Pass)
        .then(response => {
          if (response.statusType == "success") {
            let email = values.Mail;
            if (session.esUsuarioTipoCliente()) alert("es cliente");
            else if (
              session.esUsuarioTipoEmpresa() &&
              session.usuarioLogueado().Proveedor != null
            )
              alert("es Empresa");
          } else {
            if (response.error) {
              alert(response.error);
            } else {
              alert(response.message);
            }
          }
        })
        .catch(exception => {
          const error = api.exceptionExtractError(exception);
          /*this.setState({
            isLoading: false,
            ...(error ? { error } : {})
          });*/
          alert(exception);
          if (!error) {
            throw exception;
          }
        });

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
                      <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
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
                      <div className="form-group">
                        <input
                          className="form-control form-control-user"
                          placeholder="Contraseña"
                          id="Pass"
                          name="Pass"
                          type="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Pass}
                        />
                        {formik.touched.Pass && formik.errors.Pass ? (
                          <div className="formError">{formik.errors.Pass}</div>
                        ) : null}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Iniciar Sesión
                      </button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <NavLink
                        to="/Olvide"
                        activeClassName="active"
                        className="small"
                      >
                        <span>Olvidaste la contraseña?</span>
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
export default Login;
