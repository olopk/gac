import React, { useState, useEffect } from "react";
import { Grid, MenuItem } from "@material-ui/core";

import getMakes from "../../api-calls/getMakes";

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

const carType = [
  { label: "motocykl", value: "motorcycle" },
  { label: "osobowy", value: "car" },
  { label: "ciężarowy", value: "truck" },
];

const Input = (props) => (
  <TextField
    {...props}
    variant="filled"
    InputProps={{ disableUnderline: true }}
  />
);

const FormElement = ({ id, title, type, data, value, onChange }) => {
  switch (type) {
    // case "calendar":
    //   return (
    //     <DatePicker
    //       customInput={<Input label={title} />}
    //       value={value}
    //       id={id}
    //       onChange={onChange}
    //     />
    //   );
    //   break;
    case "select":
      return (
        <Input
          label={title}
          select
          value={value}
          id={id}
          onChange={(e) => {
            onChange(e.target.value, id);
          }}
        >
          {data.map(({ label, value }) => (
            <MenuItem key={`${label}-${value}`} value={value}>
              {label}
            </MenuItem>
          ))}
        </Input>
      );
      break;
    default:
      return (
        <Input
          label={title}
          value={value}
          type={type === "number" ? "number" : "text"}
          onChange={(e) => onChange(e.target.value, id)}
        />
      );
  }
};

const SelectOption = () => {
  const [formValues, SetFormValues] = useState({
    rodzajPojazdu: "car",
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

  const handleChange = (value, id) =>
    SetFormValues({ ...formValues, [id]: value });

  const [asyncData, SetAsyncData] = useState({
    marka: [],
    model: [],
    typNadwozia: [],
    paliwo: [],
    pojemnosc: [],
    mocSilnika: [],
  });

  console.log(asyncData);

  const asyncDataSetter = (id, data) =>
    SetAsyncData({ ...asyncData, [id]: data });

  const carFieldsData = [
    {
      id: "rodzajPojazdu",
      title: "rodzaj pojazdu",
      data: carType,
      value: rodzajPojazdu,
      type: "select",
    },
    {
      id: "rokProdukcji",
      title: "rok produkcji",
      data: null,
      value: rokProdukcji,
      type: "calendar",
    },
    {
      id: "marka",
      title: "marka",
      data: asyncData.marka,
      value: marka,
      type: "select",
    },
    {
      id: "model",
      title: "model",
      data: asyncData.model,
      value: model,
      type: "select",
    },
    {
      id: "typNadwozia",
      title: "typ nadwozia",
      data: asyncData.typNadwozia,
      value: typNadwozia,
      type: "select",
    },
    {
      id: "paliwo",
      title: "paliwo",
      data: asyncData.paliwo,
      value: paliwo,
      type: "select",
    },
    {
      id: "pojemnosc",
      title: "pojemność",
      data: asyncData.pojemnosc,
      value: pojemnosc,
      type: "select",
    },
    {
      id: "mocSilnika",
      title: "moc silnika",
      data: asyncData.mocSilnika,
      value: mocSilnika,
      type: "select",
    },
  ];
  const driverFieldsData = [
    {
      id: "imie",
      title: "Imię",
      data: null,
      value: imie,
      type: "string",
    },
    {
      id: "nazwisko",
      title: "Nazwisko",
      data: null,
      value: nazwisko,
      type: "string",
    },
    {
      id: "pesel",
      title: "PESEL",
      data: null,
      value: pesel,
      type: "number",
    },
  ];
  const contactFieldsData = [
    {
      id: "nrTelefonu",
      title: "nr telefonu",
      data: null,
      value: nrTelefonu,
      type: "number",
    },
    {
      id: "terminKontakt",
      title: "termin kontaktu",
      data: null,
      value: terminKontakt,
      type: "calendar",
    },
  ];

  useEffect(async () => {
    const data = await getMakes(formValues.rodzajPojazdu);
    asyncDataSetter("marka", data);
  }, [formValues.rodzajPojazdu]);

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
              <Grid key={`${field}-${index}`} item xs={12} md={3}>
                <FormElement
                  key={`${field}${index}`}
                  {...field}
                  onChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <BlockText>dane właściciela</BlockText>
            </Grid>
            {driverFieldsData.map((field, index) => (
              <Grid key={`${field}-${index}`} item xs={12} md={3}>
                <FormElement
                  key={`${field}${index}`}
                  {...field}
                  onChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <BlockText>dane kontaktowe</BlockText>
            </Grid>
            {contactFieldsData.map((field, index) => (
              <Grid key={`${field}-${index}`} item xs={12} md={3}>
                <FormElement
                  key={`${field}${index}`}
                  {...field}
                  onChange={handleChange}
                />
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
