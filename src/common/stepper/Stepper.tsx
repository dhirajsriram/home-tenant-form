import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { useSelector, useDispatch } from "react-redux";
import "./Stepper.scss";
import { Button } from "@material-ui/core";
import { SETSTEP } from "../../store/constants/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "30%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

function getSteps() {
  return ["Name", "Email", "Phone", "Salary"];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const steps = getSteps();
  const activeStep = useSelector((state: any) => state.reducer.step);
  const dispatch = useDispatch();

  const setStep = (step: number) => {
    dispatch({ type: SETSTEP, payload: { step } });
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>
              {" "}
              <Button
                aria-haspopup="true"
                className="default-text"
                key={label}
                onClick={(e) => setStep(index)}
                disabled={activeStep < index}
              >
                {label}
              </Button>
            </StepLabel>{" "}
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
