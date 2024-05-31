import React from "react";
import { NavLink } from "react-router-dom";

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
  return (
    <SidebarContainer>
      <List>
        {sidebarItems.map((item) => (
          <ListItem
            button
            key={item.name}
            component={NavLink}
            to={item.link}
            style={{ color: "#9EE493" }}
          >
            <StyledListItemIcon style={{ minWidth: "40px" }}>
              <item.Icon style={{ color: "#9EE493" }} />
            </StyledListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
