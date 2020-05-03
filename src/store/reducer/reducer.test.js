import reducer from "./reducer";
import { initialState } from "./reducer";
import { setLanguage, setStep, setFormValue, setInitial } from "../action";

describe("Reducer.js", () => {
  it("Sets the language", () => {
    let tempState = initialState;
    tempState.language = "en";
    expect(reducer(initialState, setLanguage("en"))).toEqual(tempState);
  });
  it("Sets the step", () => {
    let tempState = initialState;
    tempState.step = 1;
    expect(reducer(initialState, setStep(1))).toEqual(tempState);
  });
  it("Sets the form value", () => {
    let tempState = initialState;
    let tempPayload = {
      "first-name": {
        value: "XXXX",
        valid: true,
      },
    };
    tempState["first-name"] = tempPayload["first-name"];
    expect(reducer(initialState, setFormValue(tempPayload))).toEqual(tempState);
  });
  it("Resets the form value", () => {
    let tempState = initialState;
    let tempPayload = {
      "first-name": {
        value: "XXXX",
        valid: true,
      },
    };
    tempState["first-name"] = tempPayload["first-name"];
    reducer(initialState, setFormValue(tempPayload));
    expect(reducer(initialState, setInitial())).toEqual(tempState);
  });
});
