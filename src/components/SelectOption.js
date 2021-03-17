import React from "react";
import { Grid } from "@material-ui/core";
import {
  Container,
  Typography,
  Paper,
  Image,
  TextBox,
} from "./SelectOptionCss";

const SelectOption = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextBox>
            <Typography>Wybierz cel ubezpieczenia</Typography>
          </TextBox>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Image src="../assets/house.png" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Image src="../assets/car.png" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Image src="../assets/sunset.png" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SelectOption;
