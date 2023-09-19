import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import './pieChart.css';

const COLORS = ['none', '#FF0000'];

interface UserTodayScore {
	todayScore:number
}

export default class Example extends PureComponent<UserTodayScore> {
	render() {
		const { todayScore } = this.props;
		const data = [
			{ name: 'Rest', value: (100 - (todayScore*100)) },
			{ name: 'TodayScore', value: todayScore*100 },
		];
		console.log('TodayScore',data);
		return (
			<div className='PieChart--Container'>
				<span className='PieChart--Title'>Score</span>
				<ResponsiveContainer>
					<PieChart 
						width={258} 
						height={263} 
						reverseStackOrder={true} 
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 10,
						}}
					>
						<Pie
							data={data}
							cx='50%'
							cy='50%'
							innerRadius={78}
							outerRadius={90}
							fill="#8884d8"
							paddingAngle={0}
							dataKey="value"
							startAngle={-130}
							cornerRadius={10}
						>
							{data.map((_entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
				<div className='PieChart--TxtContainer'>
					<span className='PieChart--Score'>{todayScore*100}%</span>
					<br />
					<span>de votre objectif</span>
				</div>
			</div>
		);
	}
}
