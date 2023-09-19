import React from 'react';

import './messageAcceuil.css';

const MessageAcceuil = ({userFirstName}: {userFirstName:string}) => {
	return (
		<>
			<h1>
				<span className='Bonjour'>Bonjour </span> 
				<span className='FirstName'>{userFirstName}</span>
			</h1>
			<br />
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</>
	);
};

export default MessageAcceuil;