import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import store from "../../Redux/Store";
import { fetchApi } from "../../Redux/Acciones/Fetch";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  GET_CATEGORIAS,
  UPDATE_CATEGORIA,
  DELETE_CATEGORIA,
  CREATE_CATEGORIA,
  RESTORE_CATEGORIA,
  GET_CATEGORIAS_DELETED,
  SELECT_CATEGORIA
} from "../../Redux/Acciones/CategoriasActions";

const NuevaCategoria = props => {
  const formik = useFormik({
    initialValues: {
      Categoria: ""
    },
    validationSchema: Yup.object({
      Categoria: Yup.string()
        .min(3, "La Categoria tiene que tener al menos 3 caracteres")
        .required("Obligatorio")
    }),
    onSubmit: values => {
      store.dispatch(
        fetchApi(
          [CREATE_CATEGORIA, "SUCCES"],
          "/categorias",
          {
            nombre: values.Categoria
          },
          "POST",
          false
        )
      ).then(()=> { store.dispatch(fetchApi(["GET_CATEGORIAS", "SUCCES"], "/categorias")) } )
      .then(props.history.push("/Categorias"));
    }
  });

  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Nueva Categoria</h6>
        </div>
        <div className="card-body">
          <form className="user" onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
                <input
                  className="form-control form-control-user"
                  placeholder="Categoria"
                  id="Categoria"
                  name="Categoria"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Categoria}
                />
                {formik.touched.Categoria && formik.errors.Categoria ? (
                  <div className="formError">{formik.errors.Categoria}</div>
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
    </div>
  );
};
export default NuevaCategoria;
