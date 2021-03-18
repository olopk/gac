import React, { useState } from "react";
import { Grid, MenuItem } from "@material-ui/core";

import {
  Container,
  Typography,
  TextField,
  TextBox,
  GobackBox,
  GobackText,
  BackIcon,
} from "./CarFormCss";

import DatePicker from "../../components/DatePicker/DatePicker";

const carType = ["MOTOCYKL", "SAMOCHÓD OSOBOWY", "SAMOCHÓD CIĘŻAROWY"];

const Input = (props) => (
  <TextField
    {...props}
    variant="filled"
    InputProps={{ disableUnderline: true }}
  />
);

const SelectOption = () => {
  const [formValues, SetFormValues] = useState({
    rodzajPojazdu: "",
    rokProdukcji: "",
    marka: "",
    model: "",
    typNadwozia: "",
    paliwo: "",
    pojemnosc: "",
    mocSilnika: "",
    imie: "",
    nazwisko: "",
    pesel: "",
    nrTelefonu: "",
    terminKontakt: "",
  });

  const {
    rodzajPojazdu,
    rokProdukcji,
    marka,
    model,
    typNadwozia,
    paliwo,
    pojemnosc,
    mocSilnika,
    imie,
    nazwisko,
    pesel,
    nrTelefonu,
    terminKontakt,
  } = formValues;
  const [asyncData, SetAsyncData] = useState({
    marka: [],
    model: [],
    typNadwozia: [],
    paliwo: [],
    pojemnosc: [],
    mocSilnika: [],
  });

  const asyncDataSetter = (type, data) =>
    SetAsyncData({ ...asyncData, [type]: data });

  const handleChange = (event, id) =>
    SetFormValues({ ...formValues, [id]: event.target.value });

  const sections = ["Dane pojazdu", "Dane właściciela", "Dane kontaktowe"];

  const fieldsData = [
    {
      title: "Rodzaj pojazdu",
      data: carType,
      value: rodzajPojazdu,
      type: "select",
    },
    {
      title: "Rok produkcji",
      data: null,
      value: rokProdukcji,
      type: "calendar",
    },
    {
      title: "Marka",
      data: asyncData.marka,
      value: marka,
      type: "select",
    },
    {
      title: "Model",
      data: asyncData.model,
      value: model,
      type: "select",
    },
    {
      title: "Typ nadwozia",
      data: asyncData.typNadwozia,
      value: typNadwozia,
      type: "select",
    },
    {
      title: "Paliwo",
      data: asyncData.paliwo,
      value: paliwo,
      type: "select",
    },
    {
      title: "Pojemność",
      data: asyncData.pojemnosc,
      value: pojemnosc,
      type: "select",
    },
    {
      title: "Moc silnika",
      data: asyncData.mocSilnika,
      value: mocSilnika,
      type: "select",
    },
    {
      title: "Imię",
      data: null,
      value: imie,
      type: "string",
    },
    {
      title: "Nazwisko",
      data: null,
      value: nazwisko,
      type: "string",
    },
    {
      title: "PESEL",
      data: null,
      value: pesel,
      type: "number",
    },
    {
      title: "Nr telefonu",
      data: null,
      value: nrTelefonu,
      type: "number+",
    },
    {
      title: "Termin kontaktu",
      data: null,
      value: terminKontakt,
      type: "hourCalendar",
    },
  ];

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
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12} md={3}>
              <Input label="Rodzaj pojazdu" select>
                {carType.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Input>
            </Grid>
            <Grid item xs={12} md={3}>
              <DatePicker customInput={<Input label="Rok produkcji" />} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Input label="Marka" select>
                {carType.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Input>
            </Grid>
            <Grid item xs={12} md={3}>
              <Input label="Model" select>
                {carType.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Input>
            </Grid>
          </Grid>
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
