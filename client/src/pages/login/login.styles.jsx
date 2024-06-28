import styled from "styled-components";

import { lightGreen } from "../../styles/global.styles";

export const LoginContainer = styled.div`
  background-color: #daf7dc;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginForm = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 30vw;
  height: 40vh;
  background-color: ${lightGreen};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const LoginFormHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px;
`;
