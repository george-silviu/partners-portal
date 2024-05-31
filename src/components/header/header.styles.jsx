import styled from "styled-components";

import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

import { lightGreen, darkBlue } from "../../styles/global.styles";

export const HeaderContainer = styled.div`
  grid-area: header;

  background-color: ${darkBlue};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  margin: 2.5px;
  border-radius: 5px;
`;

export const SidebarDisplayIcon = styled(ViewHeadlineIcon)`
  color: ${lightGreen};
  cursor: pointer;
`;
