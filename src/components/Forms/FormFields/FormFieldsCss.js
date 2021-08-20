import styled from "styled-components";
import {
  TextField as DefaultTextField,
  Select as DefaultSelect,
} from "@material-ui/core";

import AutocompleteDefault from "@material-ui/lab/Autocomplete";

import { white, blueLight } from "../../appColors";

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
export const Autocomplete = styled(AutocompleteDefault)`
  && > .MuiFormControl-marginNormal {
    margin: 0;
  }
`;
