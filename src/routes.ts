import React from 'react';
const Form = React.lazy(() => import('./pages/form/Form'));
const FourZeroFour = React.lazy(() => import('./pages/fourzerofour/FourZeroFour'));

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
