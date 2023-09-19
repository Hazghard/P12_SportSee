import React, { useState, useContext } from 'react';

import { ToggleContextType, useToggleContext } from '@/Context/ToggleMockContext';
import { UserIdCreateContext, useUserIdContext } from '@/Context/UserIdContext';
import userNamesArray from '@/_Services/GetAllUsersIDandName.service';


import './mocktoggle.css';

const MockToggle = ({ name }: { name: string }) => {

	// Context du toggleSwitch
	const { toggleState, toggleSwitchContext }: ToggleContextType = useToggleContext();
	// Context du userId
	const { userId, setUserIdContext }: UserIdCreateContext = useUserIdContext();

	const handleToggleClick = () => {
		toggleSwitchContext();
	};

	const [user, setUser] = useState<number>(12);
	function handleUserChange(event: React.ChangeEvent<HTMLSelectElement>) {
		if (event.target) {
			const selectedUserId = parseInt(event.target.value);
			console.log('selectedUserId',selectedUserId);
			setUser(selectedUserId);
			setUserIdContext(selectedUserId);
		}
	}

	// console.log('MockToggle : ','toggleState',toggleState,'toggleSwitchContext',toggleSwitchContext);
	// console.log('MockToggle : ','userId',userId,'setUserIdContext',setUserIdContext);
	// console.log('MockToggle : ','userNamesArray',userNamesArray);

	return (
		<div className='MockContainer'>
			<div className={`toggle-switch ${toggleState}`}>
				<input
					type="checkbox"
					className={`toggle-switch-checkbox ${toggleState === 'MOCK' ? 'checked' : ''}`}
					name={name}
					id={name}
					checked={toggleState === 'MOCK'}
					onChange={() => {}} // Aucune action sur le click User pour ne pas dupliquer les event et changement d'etat, géré par onClick
				/>
				<label className="toggle-switch-label" htmlFor={name} onClick={handleToggleClick}>
					<span className="toggle-switch-inner"></span>
					<span className="toggle-switch-switch" />
				</label>
			</div>
			{/* {toggleState === 'MOCK' ? ( */}
			<select value={user} onChange={handleUserChange}>
				{userNamesArray.map(user => <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>)}
			</select>
			{/* ) : null} */}
		</div>
	);
};

export default MockToggle;
