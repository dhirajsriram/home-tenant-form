import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SETSTEP } from "../../../../store/constants/constants";
import { useTranslation } from "react-i18next";

function Navigation(props: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const form = useSelector((state: any) => state.reducer.form);
  const next = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: props.next } });
  };
  const back = (e: any) => {
    dispatch({ type: SETSTEP, payload: { step: props.previous } });
  };
  const valid = (field: string) => {
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
        {t("next")}
      </Button>
      {props.field !== "name" && (
        <Button
          className="form-button-previous"
          variant="contained"
          color="primary"
          onClick={(e) => back(e)}
        >
          {t("back")}
        </Button>
      )}
    </div>
  );
}

export default Navigation;
