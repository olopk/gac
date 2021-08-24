import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { getMakes, getModels } from "../../../api-calls/index";
import FormInput from "../FormFields/FormInput";
import FormSelect from "../FormFields/FormSelect";
import FormAutocomplete from "../FormFields/FormAutocomplete";
import DatePicker from "../../DatePicker/DatePicker";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SendIcon from "@material-ui/icons/Send";
import { sendEmail } from "../../EmailSender";
import { Link, H1, H2, ActionButton, GridButtons, Loader } from "../../styles";
import { Container, TextBox, LackOfData } from "../CarFormCss";
import { isValid } from "./isValid";
import { dateParser } from "../../functions";

import {
  carFieldsData,
  driverFieldsData,
  contactFieldsData,
} from "./fieldsData";

const dt = new Date();
dt.setMinutes(dt.getMinutes() + 60);

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
  const [state, setState] = useState({
    hasRegNr: true,
  });
  const [loading, setLoading] = useState({
    marka: false,
    model: false,
    sent: false,
  });
  const { hasRegNr } = state;

  const submit = async () => {
    const {
      nrRej,
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
    setLoading((prev) => ({ ...prev, sent: true }));
    await sendEmail(
      hasRegNr
        ? `
        <p>nr rejestracyjny pojazdu: ${nrRej}</p>
        <p>pesel: ${pesel}</p>
        <p>nrTelefonu: ${nrTelefonu}</p>
        <p>terminKontakt: ${dateParser(terminKontakt)}</p>
        `
        : `
        <p>imie: ${imie}</p>
        <p>nazwisko: ${nazwisko}</p>
        <p>pesel: ${pesel}</p>
        <p>nrTelefonu: ${nrTelefonu}</p>
        <p>terminKontakt: ${dateParser(terminKontakt)}</p>
        <br/>
        <p>nr rejestracyjny pojazdu: ${nrRej}</p>
        <p>rodzaj pojazdu: ${rodzajPojazdu}</p>
        <p>rok produkcji: ${rokProdukcji}</p>
        <p>mark: ${marka}</p>
        <p>model: ${model}</p>
        <p>typNadwozia: ${typNadwozia}</p>
        <p>paliwo: ${paliwo}</p>
        <p>pojemnosc: ${pojemnosc}</p>
        <p>mocSilnika: ${mocSilnika}</p>
        `
    );
    setLoading((prev) => ({ ...prev, sent: false }));
  };

  const [formValues, SetFormValues] = useState({
    nrRej: "",
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
    terminKontakt: dt,
  });

  const { rodzajPojazdu, rokProdukcji, marka } = formValues;

  const handleChange = (value, id) => {
    SetFormValues({ ...formValues, [id]: value });
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
        style={{ height: "100vh", padding: "0px 5px" }}
      >
        <Grid item xs={12}>
          <TextBox>
            <H1>niezbędne informacje</H1>
          </TextBox>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <H2>dane pojazdu</H2>
                </Grid>
                {carFieldsData(formValues, asyncData)
                  .filter((field) => (hasRegNr ? field.id === "nrRej" : field))
                  .map((field, index) => (
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
                {driverFieldsData(formValues)
                  .filter((field) => (hasRegNr ? field.id === "pesel" : field))
                  .map((field, index) => (
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
              <LackOfData
                onClick={() =>
                  setState((prev) => ({ ...prev, hasRegNr: !prev.hasRegNr }))
                }
              >
                {hasRegNr
                  ? "nie znam numeru rejestracyjnego"
                  : "znam numer rejestracyjny pojazdu"}
              </LackOfData>
            </Grid>
          </Grid>
        </Grid>
        <GridButtons item xs={12}>
          <Link to="/carinsurance">
            <ActionButton variant="outlined" startIcon={<ArrowBackIcon />}>
              cofnij
            </ActionButton>
          </Link>
          <Link>
            <ActionButton
              variant="outlined"
              disabled={!isValid(formValues, hasRegNr)}
              endIcon={loading.sent ? <Loader size={18} /> : <SendIcon />}
              onClick={loading.sent ? () => {} : () => submit()}
            >
              wyślij
            </ActionButton>
          </Link>
        </GridButtons>
      </Grid>
    </Container>
  );
};
export default SelectOption;
