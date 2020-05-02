import React from "react";
import Name from "./steps/Name";
import "./Form.scss";
import { useSelector } from "react-redux";
import Email from "./steps/Email";
import Phone from "./steps/Phone";
import Salary from "./steps/Salary";

const Form: React.FC = () => {
  const activeStep = useSelector((state: any) => state.reducer.step);
  const RenderStep = () => {
    switch (activeStep) {
      case 0:
        return <Name />;
      case 1:
        return <Email />;
      case 2:
        return <Phone />;
      case 3:
        return <Salary />;
      default:
        break;
    }
  };
  return (
    <div className="form-container">
      <form>{RenderStep()}</form>
    </div>
  );
};

export default Form;
