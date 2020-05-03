import { SETLANGUAGE, SETSTEP, SETFORMVALUE, SETINITIAL } from "../constants/constants";

interface Actions {
  type: String;
  payload: {
    field: string | any;
    language: string;
    step: number;
    value: field;
    valid: boolean;
  };
}

interface form {
  [index: string]: field
}

interface InitialState {
  language: string;
  step: number;
  form: form;
}

interface field {
  value: string|null;
  valid: boolean;
}

const initialState: InitialState = {
  language: "EN",
  step: 0,
  form: {
    "first-name": {
      value: null,
      valid: false,
    },
    "last-name": {
      value: null,
      valid: false,
    },
    "email": {
      value: null,
      valid: false,
    },
    "phone": {
      value: null,
      valid: false,
    },
    "salary": {
      value: null,
      valid: false,
    },
  },
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SETLANGUAGE:
      return { ...state, language: action.payload.language };
    case SETSTEP:
      return { ...state, step: action.payload.step };
    case SETFORMVALUE:
      let form:form = {};
      Object.assign(form,state.form);
      form[action.payload.field] = action.payload.value;
      return { ...state, form : form}
    case SETINITIAL:
        return initialState;
    default:
      return state;
  }
};

export default reducer;
