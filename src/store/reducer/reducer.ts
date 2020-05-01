import { SETLANGUAGE } from "../constants/constants";

interface Actions {
	type: String;
	payload:any;
}

const initialState = {
	language : "EN"
}

const reducer = (state = initialState, action: Actions) => {
	switch (action.type) {
		case SETLANGUAGE:
			return {...state,language: action.payload.language};
		default:
			return state;
	}
};

export default reducer;
