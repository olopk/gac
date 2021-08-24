import React from "react";
import { Grid } from "@material-ui/core";
import { Link, H1 } from "./styles";
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
          <H1>wybierz cel ubezpieczenia</H1>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Image src="../assets/house.png" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/carinsurance">
            <Paper>
              <Image src="../assets/car.png" />
            </Paper>
          </Link>
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
