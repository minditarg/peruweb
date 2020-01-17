export const Pendiente = data => {
  return {
    type: "pendiente",
    payload: data
  };
};
export const Err = err => {
  return {
    type: "error",
    payload: err
  };
};
export const Initial = data => {
  return {
    type: "init",
    payload: data
  };
};
