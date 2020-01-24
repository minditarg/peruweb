import fetch from "cross-fetch";
import store from "../Store";
const config = {
  // url: 'http://50.63.166.215:5001/api',
  // pathFiles: 'http://50.63.166.215:5001/uploads/',
  url: "http://10.30.30.125:3001/api",
  pathFiles: "http://10.30.30.125:3001/uploads/"
};

export const FETCHING = "FETCHING";
function fetching() {
  return {
    type: FETCHING
  };
}
export const SUCCES = "SUCCES";
function succes(data) {
  return {
    type: SUCCES
  };
}
export const FAIL = "FAIL";
function fail(error) {
  return {
    type: FAIL,
    error: error
  };
}

export function fetchApi(
  actionDispatch,
  endpoint,
  payload = {},
  metodo = "get",
  multipart = false
) {
  const accessToken = store.getState().User.token;
  return function(dispatch) {
    dispatch(fetching());

    console.log(config.url + endpoint, {
      method: metodo,
      headers: {
        Accept: multipart ? "" : "application/json",
        Authorization: "Bearer " + accessToken,
        ...(!multipart ? { "Content-Type": "application/json" } : {})
      },
      ...((metodo === "post") | (metodo === "put")
        ? { body: multipart ? payload : JSON.stringify(payload) }
        : {})
    });

    return fetch(config.url + endpoint, {
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
      .then(res => {
        return res.json();
      })
      .then(result => {
        if (result.statusCode >= 400) {
          throw new Error(result.message);
        }
        actionDispatch.forEach(element => {
          dispatch({
            type: element,
            payload: result
          });
        });
      })
      .catch(error => {
        console.log(error);
        dispatch(fail(error));
        return error;
      });
  };
}
