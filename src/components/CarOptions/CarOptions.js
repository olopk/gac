import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import {
  Link,
  ActionButton,
  H1,
  GridButtons,
  GridContainer,
  CheckIcon,
} from "../styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import {
  Container,
  Paper,
  Image,
  ImageSm,
  TextBox,
  TypographyOC,
} from "./CartOptionsCss";

const SelectOption = (props) => {
  const [selected, setSelected] = useState(["oc"]);

  const checkOption = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );

  return (
    <Container>
      <GridContainer container spacing={3} alignContent="space-between">
        <Grid item xs={12}>
          <TextBox>
            <H1>wybierz zakres ubezpieczenia</H1>
          </TextBox>
        </Grid>
        <Grid item xs={6}>
          <Paper
            onClick={() => checkOption("ac")}
            checked={selected.includes("ac")}
          >
            {selected.includes("ac") && <CheckIcon />}
            <ImageSm src="../assets/ac.png" />
            <TextBox>ac</TextBox>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            onClick={() => checkOption("nnw")}
            checked={selected.includes("nnw")}
          >
            {selected.includes("nnw") && <CheckIcon />}
            <ImageSm src="../assets/nnw.png" />
            <TextBox>nnw</TextBox>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            style={{
              flexDirection: "row",
            }}
            onClick={() => checkOption("oc")}
            checked={selected.includes("oc")}
          >
            {selected.includes("oc") && <CheckIcon style={{ left: "90%" }} />}

            <Image src="../assets/oc.png" />
            <TypographyOC>oc</TypographyOC>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            onClick={() => checkOption("assistance")}
            checked={selected.includes("assistance")}
          >
            {selected.includes("assistance") && <CheckIcon />}
            <ImageSm src="../assets/tow-truck.png" />
            <TextBox>assistance</TextBox>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            onClick={() => checkOption("szyby")}
            checked={selected.includes("szyby")}
          >
            {selected.includes("szyby") && <CheckIcon />}
            <ImageSm src="../assets/car-door.png" />
            <TextBox>szyby</TextBox>
          </Paper>
        </Grid>
        <GridButtons item xs={12}>
          <Link to="/">
            <ActionButton variant="outlined" startIcon={<ArrowBackIcon />}>
              cofnij
            </ActionButton>
          </Link>
          <Link
            to={selected.length ? "/carinsurance/oc" : "#"}
            disabled={!selected.length}
          >
            <ActionButton
              variant="outlined"
              disabled={!selected.length}
              endIcon={<ArrowForwardIcon />}
            >
              dalej
            </ActionButton>
          </Link>
        </GridButtons>
      </GridContainer>
    </Container>
  );
};

export default SelectOption;
