import styled from "styled-components";

import { darkBlue } from "../../styles/global.styles";

export const BreadcrumbContainer = styled.div`
  grid-area: breadcrumb;

  background-color: ${darkBlue};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 2.5px;
  padding-left: 20px;
  border-radius: 5px;
`;
