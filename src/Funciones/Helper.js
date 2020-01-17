import { Pendiente, Err } from "../Redux/Acciones/App";
import { Login, Logout } from "../Redux/Acciones/Usuario";
const config = {
  // url: 'http://50.63.166.215:5001/api',
  // pathFiles: 'http://50.63.166.215:5001/uploads/',
  url: "http://10.30.30.125:3001/api",
  pathFiles: "http://10.30.30.125:3001/uploads/"
};

function fetchData(
  endpoint,
  actionRedux,
  payload = {},
  metodo = "get",
  multipart = false
) {
  const accessToken = "";
  return (dispatch = Pendiente) => {
    dispatch(Pendiente());
    fetch(config.url + endpoint, {
      method: metodo,
      headers: {
        Accept: multipart ? "" : "application/json",
        Authorization: "Bearer " + accessToken,
        ...(!multipart ? { "Content-Type": "application/json" } : {})
      },
      ...((metodo === "post") | (metodo === "put")
        ? { body: multipart ? payload : JSON.stringify(payload) }
        : {})
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(Login(res));
        return res.products;
      })
      .catch(error => {
        dispatch(Err(error));
      });
  };
}

export default fetchData;
