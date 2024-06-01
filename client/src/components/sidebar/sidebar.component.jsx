import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import styled from "styled-components";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import { SidebarContainer } from "./sidebar.styles";

const StyledListItemIcon = styled(ListItemIcon)`
  color: #9ee493;
`;

const sidebarItems = [
  { name: "Dashboard", link: "/dashboard", Icon: DashboardIcon },
  { name: "Partners", link: "/partners", Icon: HandshakeIcon },
  { name: "Users", link: "/users", Icon: PersonIcon },
  { name: "Leads", link: "/leads", Icon: GroupIcon },
  { name: "Resources", link: "/resources", Icon: AutoStoriesIcon },
  { name: "E-learning", link: "/e-learning", Icon: SchoolIcon },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      <List>
        {sidebarItems.map((item) => (
          <NavLink to={item.link} style={{ textDecoration: "none" }}>
            <ListItem
              button
              key={item.name}
              style={
                location.pathname === item.link
                  ? {
                      borderRadius: "10px",
                      backgroundColor: "#9EE493",
                      color: "#2f4858",
                    }
                  : { color: "#9EE493", borderRadius: "10px" }
              }
            >
              <StyledListItemIcon style={{ minWidth: "40px" }}>
                <item.Icon
                  style={
                    location.pathname === item.link
                      ? { color: "#2f4858" }
                      : { color: "#9EE493" }
                  }
                />
              </StyledListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
