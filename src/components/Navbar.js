import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        DyL360
      </Typography>
      <nav>
        <Link
          to="/"
          style={{ color: "#fff", marginRight: 16, textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/nosotros"
          style={{ color: "#fff", marginRight: 16, textDecoration: "none" }}
        >
          Quiénes somos
        </Link>
        <Link
          to="/trabajos"
          style={{ color: "#fff", marginRight: 16, textDecoration: "none" }}
        >
          Nuestros trabajos
        </Link>
        <Link
          to="/servicios"
          style={{ color: "#fff", marginRight: 16, textDecoration: "none" }}
        >
          Servicios
        </Link>
        <Link to="/contacto" style={{ color: "#fff", textDecoration: "none" }}>
          Contacto
        </Link>
      </nav>
    </Toolbar>
  </AppBar>
);

export default Navbar;
