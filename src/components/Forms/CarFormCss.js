import styled from "styled-components";

import {
  Container as DefaultContainer,
  Paper as DefaultPaper,
  Typography,
} from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { white } from "../appColors";

export const Container = styled(DefaultContainer)`
  height: 100vh;
`;

export const TextBox = styled.div`
  margin-bottom: 3vh;
`;

export const H1 = styled.h1`
  && {
    font-size: 1.6rem;
  }
  color: ${white};
  text-align: center;
`;
export const H2 = styled.h1`
  && {
    font-size: 1.2rem;
  }
  color: ${white};
  text-align: center;
`;
export const BlockText = styled(Typography)`
  && {
    font-size: 1.3rem;
  }
  color: ${white};
`;

export const Paper = styled(DefaultPaper)`
  && {
    background-color: initial;
  }
  display: flex;
  justify-content: center;
  padding: 2vh 0vh;
`;

export const Image = styled.img`
  width: 50%;
`;

export const GobackBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5vh;
`;

export const GobackText = styled(Typography)`
  font-size: 1.2rem;
  color: ${white};
`;

export const BackIcon = styled(ArrowBackIosIcon)`
  && {
    color: ${white};
  }
`;
