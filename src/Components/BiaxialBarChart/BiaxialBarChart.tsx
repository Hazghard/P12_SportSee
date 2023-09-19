import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './biaxialBarChart.css';

interface UserSessionsType {
  userActivitySessions: [{ day: string; kilogram: number; calories: number; }];
}

const CustomTooltip = ({ active, payload }: {active:boolean, payload:any[]}) => {
	if (active && payload && payload.length) {
		return (
			<div className='custom_tooltip'>
				<span className='custom_tooltip--label'>{`${payload[0].value}kg`}</span>
				<br />
				<span className='custom_tooltip--label'>{`${payload[1].value}Kcal`}</span>
			</div>
		);
	}
	return null;
};

export default class Example extends PureComponent<UserSessionsType> {
	render() {
		const { userActivitySessions } = this.props;
		const data = userActivitySessions;

		return (
			<div className='BiaxialBarChart--Container'>
				<span className='BiaxialBarChart--Title'>Activité quotidienne</span>
				<ResponsiveContainer width='99%' height='100%'>
					<BarChart data={data} barGap={8} margin={{ top: 80, right: 0, left: 32, bottom: 30 }} >
						<CartesianGrid vertical={false} strokeDasharray='3 3' fill='#FBFBFB'/>
						<XAxis axisLine={false} tickLine={false} tickMargin={20} tickCount={7} tickFormatter={(_value, index) => `${index + 1}`} dataKey='' stroke='#9B9EAC' />
						<YAxis yAxisId='kilogram' type='number' orientation='right' axisLine={false} tickLine={false} dataKey='kilogram' stroke='#9B9EAC' domain={['dataMin -7', 'dataMax +15']}/>
						<YAxis yAxisId='calories' type='number' domain={['dataMin -160', 'dataMax +15']} hide />
						<Tooltip content={<CustomTooltip active={true} payload={data}/>} />
						<Legend iconType='circle' iconSize={8} align='right' verticalAlign='top' wrapperStyle={{ top: 24, right: 26, marginBottom: '20px' }} formatter={(value) => ( <span className='BiaxialBarChart--LegendTxtColor'>{value}</span> )} />
						<Bar yAxisId='kilogram' dataKey='kilogram' fill='#282D30' barSize={7} radius={3} name='Poids (kg)' />
						<Bar yAxisId='calories' dataKey='calories' fill='#E60000' barSize={7} radius={3} name='Calories brûlées (kCal)' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
