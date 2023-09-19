import React, { ReactNode } from 'react';

import './button.css';

type IconType = React.ComponentType<{ className?: string }>;

interface ButtonProps {
  icon: IconType; // Accept both React components and SVGs
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, ...otherProps }) => {
	return (
		<button {...otherProps} className='Button'>
			<Icon className="icon" />
		</button>
	);
};

export default Button;

