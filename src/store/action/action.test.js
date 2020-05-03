import { setStep, setFormValue, setInitial, setLanguage } from "./index";
import {
  SETSTEP,
  SETINITIAL,
  SETFORMVALUE,
  SETLANGUAGE,
} from "../constants/constants";

let mockStep = {
  type: SETSTEP,
  payload: { step: 4 },
};

let mockFromValue = {
  type: SETFORMVALUE,
  payload: {
    field: "first-name",
    value: {
      value: "XXXX",
      valid: true,
    },
  },
};

let mockInitValue = {
  type: SETINITIAL,
  payload: {},
};

let mockLanguage = {
  type: SETLANGUAGE,
  payload: { language: "en" },
};

describe("Actions.js", () => {
  it("Creates the action for step", () => {
    expect(setStep(mockStep.payload.step)).toEqual(mockStep);
  });
  it("Creates the action for language", () => {
    expect(setLanguage(mockLanguage.payload.language)).toEqual(mockLanguage);
  });
  it("Creates the action for form value", () => {
    expect(setFormValue(mockFromValue.payload)).toEqual(mockFromValue);
  });
  it("Creates the action for initial value", () => {
    expect(setInitial(mockInitValue.payload)).toEqual(mockInitValue);
  });
});
