import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "../Select/Select";
import { connect } from "react-redux";

const NuevaSubcategoria = props => {
  const formik = useFormik({
    initialValues: {
      Categoria: "",
      Subcategoria: ""
    },
    validationSchema: Yup.object({
      Categoria: Yup.string().required("Obligatorio"),
      Subcategoria: Yup.string()
        .min(3, "La Subcategoria tiene que tener al menos 3 caracteres")
        .required("Obligatorio")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  // const OpCategorias = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" }
  // ];
  const OpCategorias = this.props.Categorias.map(function(item, i){
    return {value: item.id, label:item.nombre};
  });

  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Nueva Subcategoria </h6>
        </div>
        <div className="card-body">
          <form className="user" onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <div className="col-sm-6 offset-md-3 mb-3 mb-sm-0">
                <Select
                  idselect="Categoria"
                  options={OpCategorias}
                  value={formik.values.Categoria}
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
                  value={formik.values.Subcategoria}
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
  return { App: state.App.App, Categorias: state.Categorias.Categorias };
};
export default connect(mapStateToProps)(NuevaSubcategoria);
