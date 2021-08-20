import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { getMakes, getModels } from "../../../api-calls/index";
import FormInput from "../FormFields/FormInput";
import FormSelect from "../FormFields/FormSelect";
import FormAutocomplete from "../FormFields/FormAutocomplete";
import DatePicker from "../../DatePicker/DatePicker";

import {
  Container,
  H1,
  H2,
  TextBox,
  GobackBox,
  GobackText,
  BackIcon,
} from "../CarFormCss";

import {
  carFieldsData,
  driverFieldsData,
  contactFieldsData,
} from "./fieldsData";

const FormElement = ({ id, title, type, data, value, onChange }) => {
  switch (type) {
    case "calendar":
      return (
        <DatePicker title={title} value={value} id={id} onChange={onChange} />
      );
    case "select":
      return (
        <FormSelect
          value={value}
          title={title}
          id={id}
          onChange={onChange}
          data={data}
        />
      );
    case "autocomplete":
      return (
        <FormAutocomplete
          value={value}
          title={title}
          id={id}
          onChange={onChange}
          data={data}
        />
      );
    default:
      return (
        <FormInput
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

  const { rodzajPojazdu, rokProdukcji, marka } = formValues;

  const handleChange = (value, id) => {
    SetFormValues({ ...formValues, [id]: value });
    console.log("formValues", value, id);
  };

  const [asyncData, SetAsyncData] = useState({
    marka: [],
    model: [],
    typNadwozia: [],
    pojemnosc: [],
    mocSilnika: [],
  });

  const asyncDataSetter = (id, data) =>
    SetAsyncData({ ...asyncData, [id]: data });

  useEffect(async () => {
    const data = await getMakes(formValues.rodzajPojazdu);
    asyncDataSetter("marka", data);
  }, [formValues.rodzajPojazdu]);

  useEffect(async () => {
    if (formValues.marka) {
      const data = await getModels({
        make: marka,
        year: rokProdukcji,
        type: rodzajPojazdu,
      });
      asyncDataSetter("model", data);
    }
  }, [formValues.rodzajPojazdu, formValues.marka, formValues.rokProdukcji]);

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
            <H1>Niezbędne informacje</H1>
          </TextBox>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <H2>dane pojazdu</H2>
            </Grid>
            {carFieldsData(formValues, asyncData).map((field, index) => (
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
              <H2>dane właściciela</H2>
            </Grid>
            {driverFieldsData(formValues).map((field, index) => (
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
              <H2>dane kontaktowe</H2>
            </Grid>
            {contactFieldsData(formValues).map((field, index) => (
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
