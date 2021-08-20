import React from "react";

import { TextField } from "./FormFieldsCss";

class FormInput extends React.Component {
  render() {
    return (
      <TextField
        {...this.props}
        variant="filled"
        InputProps={{ disableUnderline: true }}
      />
    );
  }
}

export default FormInput;
