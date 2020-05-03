import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SETSTEP } from "../../../../store/constants/constants";
import { useTranslation } from "react-i18next";
import "./Navigation.scss";

interface navigation {
  next: number;
  previous: number;
  field: string;
}

const Navigation: React.FC<navigation> = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const form: any = useSelector((state: any) => state.reducer.form);

  const next = (e: React.MouseEvent): void => {
    // Move forward 
    dispatch({ type: SETSTEP, payload: { step: props.next } });
  };

  const back = (e: React.MouseEvent): void => {
    // Move back 
    dispatch({ type: SETSTEP, payload: { step: props.previous } });
  };

  const valid = (field: string): boolean => {
    // Check if the field are valiid
    if (field) {
      if (field === "name") {
        return !(form["first-name"].valid && form["last-name"].valid);
      }
      return !form[props.field].valid;
    }
    return false;
  };

  return (
    <div className="form-button-container">
      <Button
        variant="contained"
        color="primary"
        className="form-button-next"
        onClick={(e) => next(e)}
        disabled={valid(props.field)}
      >
        {props.next === 5 ? t("submit") : t("next")}
      </Button>
      {props.field !== "name" && (
        <Button
          className="form-button-previous"
          color="primary"
          onClick={(e) => back(e)}
        >
          {t("back")}
        </Button>
      )}
    </div>
  );
};

export default Navigation;
