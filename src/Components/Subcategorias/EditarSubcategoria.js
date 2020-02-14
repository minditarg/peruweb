import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "../Select/Select";
import { connect } from "react-redux";
import { fetchApi } from "../../Redux/Acciones/Fetch";

import store from "../../Redux/Store";
import {
  GET_SUBCATEGORIAS,
  CREATE_SUBCATEGORIA,
  UPDATE_SUBCATEGORIA,
  RESTORE_SUBCATEGORIAS,
  GET_SUBCATEGORIAS_DELETED,
  SELECT_SUBCATEGORIAS
} from "../../Redux/Acciones/SubcategoriasActions";
const EditarSubcategoria = props  => {
  let OpCategorias;
  if (!props.App.isLoading) {
     OpCategorias = props.Categorias.map(function(item, i){
      return {value: item.id, label:item.nombre};
    });
  }
  const formik = useFormik({
    enableReinitialize:false,
    initialValues: {
      // Categoria: "",
      Subcategoria: props.Subcategoria
    },
    validationSchema: Yup.object({
      Categoria: Yup.string().required("Obligatorio"),
      Subcategoria: Yup.string()
        .min(3, "La Subcategoria tiene que tener al menos 3 caracteres")
        .required("Obligatorio")
    }),
    onSubmit: values => {
      store.dispatch(
        fetchApi(
          [UPDATE_SUBCATEGORIA, "SUCCES"],
          "/subcategorias/"+ props.Subcategoria.id,
          {
            nombre: values.Subcategoria,
            categoriaId: values.Categoria.value
          },
          "PUT",
        )
      ).then(()=> { store.dispatch(fetchApi([GET_SUBCATEGORIAS, "SUCCES"], "/subcategorias")) } )
      .then(props.history.push("/Subcategorias"));
    }
  });

  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Subcategoria </h6>
        </div>
        <div className="card-body">
          <form className="user" onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
                <Select
                  idselect="Categoria"
                  options={OpCategorias}
                  value={formik.values.Subcategoria.categoriaId}
                  placeholder="Seleccione categoría"
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.topics}
                  touched={formik.touched.topics}
                />
                {formik.touched.Categoria && formik.errors.Categoria ? (
                  <div className="formError">{formik.errors.Categoria}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group row">
              <div className=" col-sm-6 offset-md-3">
                <input
                  className="form-control form-control-user"
                  placeholder="Subcategoria"
                  id="Subcategoria"
                  name="Subcategoria"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Subcategoria.nombre}
                />
                {formik.touched.Subcategoria && formik.errors.Subcategoria ? (
                  <div className="formError">{formik.errors.Subcategoria}</div>
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

const mapStateToProps = state => {
  return { App: state.App.App, Subcategoria: state.Subcategorias.Subcategoria,Categorias: state.Categorias.Categorias  };
};
export default connect(mapStateToProps)(EditarSubcategoria);
