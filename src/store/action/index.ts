import { SETLANGUAGE, SETSTEP, SETFORMVALUE, SETINITIAL } from "../constants/constants";

interface Actions {
  type: string;
  payload: any;
}

export const setStep = (step: number): Actions => {
  return {
    type: SETSTEP,
    payload: { step },
  };
};

export const setFormValue = (payload: any): Actions => {
  return {
    type: SETFORMVALUE,
    payload: payload,
  };
};

export const setInitial = (): Actions => {
  return {
	type: SETINITIAL,
	payload: {}
  };
};

export const setLanguage = (language: string): Actions => {
  return {
    type: SETLANGUAGE,
    payload: { language },
  };
};
