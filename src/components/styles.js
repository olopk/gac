import { Link as LinkDefault } from "react-router-dom";
import { white } from "./appColors";
import styled from "styled-components";
import { Typography, Button, Grid, CircularProgress } from "@material-ui/core";

import CheckIconDef from "@material-ui/icons/Check";

export const Link = styled(LinkDefault)`
  text-decoration: none;
`;

export const GobackBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const GobackText = styled(Typography)`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${white};
`;

export const H1 = styled.h1`
  && {
    font-size: 1.4rem;
  }
  color: ${white};
  text-align: center;
`;
export const H2 = styled.h1`
  && {
    font-size: 1.1rem;
    margin: 5px 0 2px;
  }
  color: ${white};
  text-align: center;
`;

export const ActionButton = styled(Button)`
  && {
    border-color: ${({ disabled }) =>
      disabled ? "1px solid rgba(0, 0, 0, 0.23)" : white};
    color: ${({ disabled }) =>
      disabled ? "1px solid rgba(0, 0, 0, 0.26)" : white};
    text-transform: none;
    min-width: 100px;
  }
`;
export const GridButtons = styled(Grid)`
  display: flex;
  justify-content: space-between;
`;

export const GridContainer = styled(Grid)`
  height: 100vh;
  padding: 0px 5px;
`;

export const CheckIcon = styled(CheckIconDef)`
  position: absolute;
  top: 5%;
  left: 78%;
  color: white;
`;
export const Loader = styled(CircularProgress)`
  color: ${white};
`;
