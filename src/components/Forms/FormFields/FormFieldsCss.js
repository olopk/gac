import styled from "styled-components";
import {
  TextField as DefaultTextField,
  Select as DefaultSelect,
} from "@material-ui/core";

import AutocompleteDefault from "@material-ui/lab/Autocomplete";

import { white, blueLight2 } from "../../appColors";

export const TextField = styled(DefaultTextField)`
  & {
    background-color: #dde3ea;
    border-radius: 5px;
    width: 100%;
  }

  & .MuiFormLabel-root.Mui-focused {
    color: rgba(0, 0, 0, 0.54);
  }
  & .MuiInputBase-root input {
    padding: 22px 12px 4px;
    font-size: 0.9rem;
  }
  & .MuiFormLabel-root {
    font-size: 0.8rem;
  }
`;

export const Select = styled(DefaultSelect)`
  && > .MuiFormLabel-root.Mui-focused {
    color: ${white};
  }
`;
export const Autocomplete = styled(AutocompleteDefault)`
  && > .MuiFormControl-marginNormal {
    margin: 0;
  }
`;
