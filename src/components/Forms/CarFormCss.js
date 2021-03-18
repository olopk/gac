import styled from "styled-components";
//  Default
import {
  Container as DefaultContainer,
  Typography as DefaultTypography,
  Paper as DefaultPaper,
  TextField as DefaultTextField,
  Select as DefaultSelect,
  Typography,
} from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { white, blue, blueLight, black } from "../appColors";

export const Container = styled(DefaultContainer)`
  height: 100vh;
`;

export const TextBox = styled.div`
  margin-bottom: 3vh;
`;

export const Header = styled.h1`
  && {
    font-size: 1.6rem;
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

// FIELDS

export const TextField = styled(DefaultTextField)`
  & {
    background-color: ${blueLight};
    border-radius: 5px;
    width: 100%;
  }

  & .MuiFormLabel-root.Mui-focused {
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const Select = styled(DefaultSelect)`
  && > .MuiFormLabel-root.Mui-focused {
    color: ${white};
  }
`;

export const DatePick = styled(DatePicker)``;
