import React from "react";
import { MenuItem } from "@material-ui/core";
import { TextField } from "./FormFieldsCss";

const FormSelect = (props) => {
  const { id, onChange, title, data } = props;

  return (
    <TextField
      {...props}
      select
      variant="filled"
      id={id}
      label={title}
      InputProps={{ disableUnderline: true }}
      onChange={(e) => {
        onChange(e.target.value, id);
      }}
    >
      {data.map((item, index) => (
        <MenuItem key={`${index}-${item.value}`} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FormSelect;
