import React, { useState } from "react";
import { Grid, MenuItem } from "@material-ui/core";

import {
  carCaroseryType,
  carEngineCapacity,
  carFuelType,
  carHorsePower,
  carModel,
  carProducent,
  carType,
} from "./FormData";

import {
  Container,
  Typography,
  TextField,
  TextBox,
  GobackBox,
  GobackText,
  BackIcon,
  DatePick,
} from "./CarFormCss";

const Input = (props) => (
  <TextField
    {...props}
    variant="filled"
    InputProps={{ disableUnderline: true }}
  />
);

const SelectOption = () => {
  const [fields, SetFields] = useState({
    carType: "",
  });

  const handleChange = (event, id) =>
    SetFields({ ...fields, [id]: event.target.value });

  return (
    <Container>
      <Grid
        container
        spacing={3}
        alignContent="space-between"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12}>
          <TextBox>
            <Typography>Niezbędne informacje</Typography>
          </TextBox>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={3}>
          <Input label="Rodzaj pojazdu" select>
            {carType.map((el) => (
              <MenuItem value={el}>{el}</MenuItem>
            ))}
          </Input>
          <DatePick showYearPicker dateFormat="yyyy" />
        </Grid>
        <Grid item xs={12}>
          <GobackBox>
            <BackIcon />
            <GobackText>Cofnij</GobackText>
          </GobackBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelectOption;
