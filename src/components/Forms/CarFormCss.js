import styled from "styled-components";

import {
  Container as DefaultContainer,
  Paper as DefaultPaper,
  Typography,
} from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { white, blue } from "../appColors";

export const Container = styled(DefaultContainer)``;

export const TextBox = styled.div`
  margin-bottom: 3vh;
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

export const LackOfData = styled.div`
  text-align: center;
  color: ${white};
  font-size: 0.8rem;
  border: 1px solid ${white};
  border-radius: 4px;
  padding: 7px;
  cursor: pointer;
  margin-top: 5vh;
  &:hover {
    background-color: ${white};
    color: ${blue};
  }
`;

export const BackIcon = styled(ArrowBackIosIcon)`
  && {
    color: ${white};
  }
`;
