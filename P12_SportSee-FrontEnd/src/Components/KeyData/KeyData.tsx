import React from 'react';

import './keyData.css';

type IconType = React.ComponentType<{ className?: string }>;

type Props = {
  icon?: IconType;
  svg?: React.ReactElement;
  value: number;
  valueUnit: string;
  unit: string;
};

const KeyData = ({ icon, svg, value, valueUnit, unit }: Props) => {
	return (
		<article>
			<div className='IconContainer'>
				{icon ? (typeof icon === 'function' ? React.createElement(icon, { className: 'icon' }) : icon) : null}
				{svg ? (typeof svg === 'function' ? <svg className='icon'>{svg}</svg> : svg) : null}
			</div>
			<div className='ValuesContainer'>
				<span className='Value'>{value}{valueUnit}</span>
				<span className='Unit'>{unit}</span>
			</div>
		</article>
	);
};

export default KeyData;
