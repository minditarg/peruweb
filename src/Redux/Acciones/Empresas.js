export const GetListado = user => {
  return {
    type: "getListado",
    payload: user
  };
};
export const GetEmpresa = id => {
  return {
    type: "getEmpresa",
    payload: id
  };
};
