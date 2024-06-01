import styled from "styled-components";

import { lightGreen, darkBlue } from "../../styles/global.styles";

export const LogoContainer = styled.div`
  grid-area: logo;

  background-color: ${darkBlue};

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2.5px;
  border-radius: 5px;
`;

export const LogoText = styled.h2`
  color: ${lightGreen};
`;
