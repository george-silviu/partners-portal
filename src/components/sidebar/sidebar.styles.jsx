import styled from "styled-components";

import { ListItemIcon } from "@mui/material";

import { darkBlue } from "../../styles/global.styles";

export const SidebarContainer = styled.div`
  grid-area: side;

  background-color: ${darkBlue};

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2.5px;
  border-radius: 5px;
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  color: ${darkBlue};
`;
