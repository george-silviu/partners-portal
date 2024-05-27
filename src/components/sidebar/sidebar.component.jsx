import React from "react";
import { NavLink } from "react-router-dom";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h2 style={{ textAlign: "center", color: "#9EE493" }}>Partners Portal</h2>
      <List style={{ marginTop: "30px" }}>
        <ListItem
          button
          component={NavLink}
          to="/dashboard"
          style={{ color: "#9EE493" }}
          activeClassName="active-link"
        >
          <ListItemIcon style={{ minWidth: "40px" }}>
            <DashboardIcon style={{ color: "#9EE493" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          component={NavLink}
          to="/partners"
          style={{ color: "#9EE493" }}
          activeClassName="active-link"
        >
          <ListItemIcon style={{ minWidth: "40px" }}>
            <GroupIcon style={{ color: "#9EE493" }} />
          </ListItemIcon>
          <ListItemText primary="Partners" />
        </ListItem>
      </List>
    </section>
  );
};

export default Sidebar;
