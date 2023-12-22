import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";
// import { LanguageSwitch } from "../Main/LanguageSwitch/LanguageSwitch";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header-menu">
        <Toolbar className="header-menu">
          <div className="header-menu">
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "" : "header-link"
                }
                to={"/about"}
              >
                About
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "header-active" : "header-link"
                }
                to={"/home"}
              >
                Home
              </NavLink>

              <Button color="inherit">Login</Button>
            </div>
            <div>{/* <LanguageSwitch /> */}</div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
