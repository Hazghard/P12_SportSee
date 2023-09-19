import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/Layout/Header/Header';
import AsideNavBar from '@/Layout/AsideNavBar/AsideNavBar';


import './layout.css';
import GlobalProviders from '@/Providers';

const Layout = () => {
	return (
		<GlobalProviders>
			<Header />
			<main className='Main'>
				<AsideNavBar/>
				<Outlet />
			</main>
		</GlobalProviders>

	);
};

export default Layout;