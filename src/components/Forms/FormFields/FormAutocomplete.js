import React from "react";
import { TextField, Autocomplete } from "../FormFields/FormFieldsCss";

export default function FormAutocomplete({ id, onChange, title, data }) {
  return (
    <Autocomplete
      id={id}
      clearOnEscape
      options={data}
      getOptionLabel={(option) => option.label}
      onChange={(e, v) => {
        onChange(v?.value, id);
      }}
      getOptionSelected={() => true}
      renderInput={(params) => (
        <TextField {...params} label={title} margin="normal" variant="filled" />
      )}
    />
  );
}
