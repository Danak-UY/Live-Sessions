import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

import Wrapper from "./Wrapper";
import "./../assets/styles/Header.css";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "var(--cl-secondary)",
    textTransform: "initial",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <header>
      <Wrapper>
        <section className="header__content">
          <h1>Covid-19 Live Tracker</h1>
          <p>
            The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
            in December 2019, the outbreak was later recognized as a pandemic by
            the World Health Organization (WHO) on 11 March 2020.
          </p>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={
              <ArrowForwardIosRoundedIcon
                style={{ fontSize: ".8rem", marginLeft: ".5rem" }}
              />
            }
          >
            How to protect
          </Button>
        </section>
      </Wrapper>
    </header>
  );
}

export default Header;
