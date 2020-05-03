import React, { ReactElement } from "react";
import Name from "./steps/Name";
import "./Form.scss";
import { useSelector } from "react-redux";

const Email: Function = React.lazy(() => import("./steps/Email"));
const Phone: Function = React.lazy(() => import("./steps/Phone"));
const Salary: Function = React.lazy(() => import("./steps/Salary"));
const Review: Function = React.lazy(() => import("./steps/Review"));
const Submit: Function = React.lazy(() => import("./steps/Submit"));

const Form: React.FC = () => {
  const activeStep: number = useSelector((state: any) => state.reducer.step);
  const renderStep = (): ReactElement => {
    switch (activeStep) {
      case 0:
        return <Name />;
      case 1:
        return <Email />;
      case 2:
        return <Phone />;
      case 3:
        return <Salary />;
      case 4:
        return <Review />;
      case 5:
        return <Submit />;
      default:
        break;
    }
    return <Name />;
  };
  return (
    <div className="form-container">
      <form>{renderStep()}</form>
    </div>
  );
};

export default Form;
