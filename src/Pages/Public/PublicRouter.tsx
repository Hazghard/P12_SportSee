import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Home, Error } from '@/Pages/Public/index';

import Layout from '@/Layout/Layout';

const PublicRouter = () => {
	return (
		<Routes>

			<Route element={<Layout />}>

				<Route index element={<Navigate to="/home" />} />

				<Route path='/home' element={<Home />} />

				<Route path='*' element={<Error />} />

			</Route>

		</Routes>
	);
};

export default PublicRouter;