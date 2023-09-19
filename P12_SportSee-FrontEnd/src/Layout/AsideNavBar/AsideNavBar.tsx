import React, { useContext } from 'react';
import { LuDumbbell } from 'react-icons/lu';
import { BiSwim } from 'react-icons/bi';
import { IoIosBicycle } from 'react-icons/io';
import { MdSelfImprovement } from 'react-icons/md';


import Button from '@/Components/Button/Button';


import './asidenavbar.css';

type IconType = React.ComponentType<{ className?: string }>;

const AsideNavBar = () => {
	return (
		<aside className='Aside'>
			<nav>
				<ul>
					<li><Button icon={MdSelfImprovement as IconType} /></li>
					<li><Button icon={BiSwim as IconType} /></li>
					<li><Button icon={IoIosBicycle as IconType} /></li>
					<li><Button icon={LuDumbbell as IconType}/></li>
				</ul>
			</nav>
			<p className='AsideCopiryght'>Copiryght, SportSee 2020</p>
		</aside>
	);
};

export default AsideNavBar;