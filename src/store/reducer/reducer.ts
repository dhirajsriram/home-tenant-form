import { SETLANGUAGE, SETSTEP } from "../constants/constants";

interface Actions {
  type: String;
  payload: any;
}

const initialState = {
  language: "EN",
  step: 0,
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SETLANGUAGE:
      return { ...state, language: action.payload.language };
    case SETSTEP:
      return { ...state, step: action.payload.step };
    default:
      return state;
  }
};

export default reducer;
