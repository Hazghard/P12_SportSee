import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PublicRouter from '@/Pages/Public/PublicRouter';

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route element={ <PublicRouter /> } path='/*'/>
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
