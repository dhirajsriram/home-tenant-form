interface Actions {
	type: string;
	payload: any;
}

export const setLanguage = (language:string): Actions => {
	return {
		type: 'INCREMENT',
		payload: {language}
	};
};

