import React from "react";
import { Grid } from "@material-ui/core";

import {
  Container,
  Typography,
  Paper,
  Image,
  TextBox,
  GobackBox,
  GobackText,
  BackIcon,
} from "./CartOptionsCss";

const SelectOption = () => {
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
            <Typography>Wybierz zakres ubezpieczenia</Typography>
          </TextBox>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Image src="../assets/ac.png" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Image src="../assets/nnw.png" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Image src="../assets/oc.png" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Image src="../assets/tow-truck.png" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Image src="../assets/car-door.png" />
          </Paper>
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
