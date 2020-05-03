import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { useSelector, useDispatch } from "react-redux";
import "./Stepper.scss";
import { Button } from "@material-ui/core";
import { SETSTEP } from "../../store/constants/constants";
import { useTranslation } from "react-i18next";

function getSteps() {
  return ["Name", "Email", "Phone", "Salary","Review"];
}

export default function VerticalLinearStepper() {
  const steps = getSteps();
  const { t } = useTranslation();
  const activeStep = useSelector((state: any) => state.reducer.step);
  const dispatch = useDispatch();

  const setStep = (step: number) => {
    dispatch({ type: SETSTEP, payload: { step } });
  };

  return (
    <div className="stepper-container">
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
                {t(label)}
              </Button>
            </StepLabel>{" "}
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
