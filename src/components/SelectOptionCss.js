import styled from "styled-components";

//  Default
import {
  Container as DefaultContainer,
  Typography as DefaultTypography,
  Paper as DefaultPaper,
} from "@material-ui/core";

const colors = {
  white: "#F0F4EF",
  blue: "#344966",
};

const { white, blue } = colors;

export const Container = styled(DefaultContainer)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export const TextBox = styled.div`
  margin-bottom: 2vh;
`;
export const Typography = styled(DefaultTypography)`
  color: ${white};
  text-align: center;
  font-size: 1.6rem;
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
