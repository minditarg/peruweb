import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../Redux/Store";

//"./Services/session";

class Header extends Component {
  render() {
    return (
      <nav
        id="page-top"
        className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
      >
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
          <button
                className="dropdown-item"
                onClick={() => {
                  store.dispatch({
                    type: "logout"
                  });
                  //  this.props.session.logout();
                }}
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </button>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              {/* <NavLink to="/Perfil" className="dropdown-item">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Perfil
              </NavLink>
              <div className="dropdown-divider"></div> */}
             
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    /*  session: session,
    provService: proveedorService,
    localidades: commonService.getStore().localidades*/
  };
};
export default connect(mapStateToProps)(Header);
