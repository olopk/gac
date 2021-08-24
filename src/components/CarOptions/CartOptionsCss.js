import styled from "styled-components";
import { white, blueLight2 } from "../appColors";

import {
  Container as DefaultContainer,
  Typography as DefaultTypography,
  Paper as DefaultPaper,
  Grid,
} from "@material-ui/core";

export const Container = styled(DefaultContainer)`
  height: 90vh;
`;

export const TextBox = styled.div`
  margin-top: 1vh;
  color: ${white};
`;

export const Typography = styled(DefaultTypography)`
  font-size: 1.6rem;
  color: ${white};
  text-align: center;
`;
export const TypographyOC = styled(Typography)`
  && {
    margin-left: 5vw;
    font-size: 2rem;
  }
`;

export const Paper = styled(DefaultPaper)`
  && {
    background-color: ${({ checked }) => (checked ? blueLight2 : "initial")};
  }
  border: 1px solid white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2vh 0vh;
  position: relative;
`;
export const PaperOC = styled(Paper)`
  flex-direction: row;
`;

export const Image = styled.img`
  width: 30%;
`;
export const ImageSm = styled.img`
  width: 40%;
`;
