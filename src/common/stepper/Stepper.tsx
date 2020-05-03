import React from "react";
import {
  Stepper as MatStepper,
  Step,
  StepLabel,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import "./Stepper.scss";
import { setStep } from "../../store/action";

const getSteps = (): string[] => {
  // Contains all the step titles
  return ["Name", "Email", "Phone", "Salary", "Review", "Done"];
};

const Stepper: React.FC = () => {
  const steps = getSteps();
  const { t } = useTranslation();
  const activeStep:number = useSelector((state: any) => state.reducer.step);
  const dispatch = useDispatch();
  return (
    <div className="stepper-container">
      <MatStepper activeStep={activeStep} orientation="vertical">
        {steps.map((label:string, index:number) => (
          <Step key={index}>
            <StepLabel>
              {" "}
              <Button
                aria-haspopup="true"
                className="default-text"
                key={label}
                onClick={(e) => dispatch(setStep(index))}
                disabled={activeStep < index}
              >
                {t(label)}
              </Button>
            </StepLabel>{" "}
          </Step>
        ))}
      </MatStepper>
    </div>
  );
};

export default Stepper;
