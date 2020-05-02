import React from 'react';
const Form = React.lazy(() => import('./pages/Form'));
const FourZeroFour = React.lazy(() => import('./pages/FourZero'));

const routes: Object[] = [
	{
		path: '/:id',
		component: FourZeroFour
	},
	{
		path: '/',
		component: Form
	}
];

export default routes;
