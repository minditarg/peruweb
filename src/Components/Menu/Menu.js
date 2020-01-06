import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Menu extends Component {
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            Construcciones y soluciones
          </div>
        </a>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Usuarios</div>
        <li className="nav-item">
          <NavLink
            to="/Proveedores"
            activeClassName="active"
            className="nav-link"
          >
            <i className="fas fa-user-shield"></i>
            <span>Proveedores</span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/Clientes" className="nav-link">
            <i className="fas fa-users"></i>
            <span>Clientes</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Sistema</div>

        <li className="nav-item">
          <NavLink to="/Categorias" className="nav-link">
            <i className="fas fa-tag"></i>
            <span>Categorias</span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/Subcategorias" className="nav-link">
            <i className="fas fa-tags"></i>
            <span>Subcategorias</span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/Localidades" className="nav-link">
            <i className="fas fa-map-marker-alt"></i>
            <span>Localidades</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    );
  }
}

export default Menu;
