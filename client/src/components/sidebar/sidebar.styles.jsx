import styled from "styled-components";

import { ListItemIcon, ListItem } from "@mui/material";

import { lightGreen, darkBlue } from "../../styles/global.styles";

export const SidebarContainer = styled.div`
  grid-area: side;

  background-color: ${darkBlue};

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2.5px;
  border-radius: 5px;
`;

export const ActiveLink = styled(ListItem)`
  background-color: ${lightGreen};
  color: ${lightGreen};

  &:hover {
    background-color: ${lightGreen};
    color: ${lightGreen};
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  color: ${darkBlue};
`;
