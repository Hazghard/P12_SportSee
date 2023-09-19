import React from 'react';
import { NavLink } from 'react-router-dom';

import MockToggle from '@/Components/MockToggle/MockToggle';

import logo from '@/assets/images/Logo.svg';
import logoTxt from '@/assets/images/LogoTxt.svg';

import './header.css';

const Header = () => {
	return (
		<header className='Header'>
			<div className='LogoWrapper'>
				<img src={logo} alt="SportSee logo" className='Logo'/>
				<img src={logoTxt} alt="SportSee logo texte" className='LogoTxt'/>
			</div>
			<MockToggle name="Toggle"/>
			<nav>
				<ul>
					<li><NavLink to='/acceuil'>Acceuil</NavLink></li>
					<li><NavLink to='/profil'>Profil</NavLink></li>
					<li><NavLink to='/reglage'>Réglage</NavLink></li>
					<li><NavLink to='/communaute'>Communauté</NavLink></li>
				</ul>
			</nav>

		</header>
	);
};

export default Header;