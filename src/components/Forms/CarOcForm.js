import React, { useState } from "react";
import { Grid, MenuItem } from "@material-ui/core";
import {
  Container,
  Header,
  TextField,
  BlockText,
  TextBox,
  GobackBox,
  GobackText,
  BackIcon,
} from "./CarFormCss";

import DatePicker from "../../components/DatePicker/DatePicker";

const carType = ["motocykl", "samochód osobowy", "samochód ciężarowy"];

const Input = (props) => (
  <TextField
    {...props}
    variant="filled"
    InputProps={{ disableUnderline: true }}
  />
);

const FormElement = ({ title, type, data, value }) => {
  console.log(type === "select");
  switch (type) {
    case "calendar":
      console.log("yes");

      return <DatePicker customInput={<Input label={title} value={value} />} />;
      break;
    case "hourCalendar":
      return <DatePicker customInput={<Input label={title} value={value} />} />;
      break;
    case "number":
      return <Input label={title} value={value} />;
      break;
    case "select":
      console.log(data);
      console.log(type);
      return (
        <Input label={title} select>
          {data.map((el) => (
            <MenuItem value={el}>{el}</MenuItem>
          ))}
        </Input>
      );
      break;
    default:
      return <Input label={title} value={value} />;
  }
};

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

  const handleChange = (event, id) =>
    SetFormValues({ ...formValues, [id]: event.target.value });

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

  const carFieldsData = [
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
  ];
  const driverFieldsData = [
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
  ];
  const contactFieldsData = [
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
  //const sections = ["dane pojazdu", "dane właściciela", "dane kontaktowe"];
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
            <Header>niezbędne informacje</Header>
          </TextBox>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <BlockText>dane pojazdu</BlockText>
            </Grid>
            {carFieldsData.map((field, index) => (
              <Grid item xs={12} md={3}>
                <FormElement key={`${field}${index}`} {...field} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <BlockText>dane właściciela</BlockText>
            </Grid>
            {driverFieldsData.map((field, index) => (
              <Grid item xs={12} md={3}>
                <FormElement key={`${field}${index}`} {...field} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <BlockText>dane kontaktowe</BlockText>
            </Grid>
            {contactFieldsData.map((field, index) => (
              <Grid item xs={12} md={3}>
                <FormElement key={`${field}${index}`} {...field} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <GobackBox>
            <BackIcon />
            <GobackText>cofnij</GobackText>
          </GobackBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelectOption;
