export const Login = user => {
  return {
    type: "login",
    payload: user
  };
};
export const Logout = user => {
  return {
    type: "logout",
    payload: user
  };
};
