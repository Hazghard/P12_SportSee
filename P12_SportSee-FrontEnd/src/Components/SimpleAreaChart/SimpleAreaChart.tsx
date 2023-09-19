import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './simpleAreaChart.css';

interface UserSessionsLengthType {
  userAverageSessions: [{ day: number; sessionLength: number; }];
}

const CustomTooltip = ({ active, payload }:{active:boolean, payload:any[]}) => {
	if (active && payload && payload.length) {
		return (
			<div className='SimpleAreaChart--Tooltip'>
				<p className='SimpleAreaChart--Text'>{`${payload[0].value} min`}</p>
			</div>
		);
	}
	return null;
};

export default class Example extends PureComponent<UserSessionsLengthType> {
	render() {
		const { userAverageSessions } = this.props;
		const data = userAverageSessions;
		console.log('userAverageSessions',data);
		return (
			<div className='SimpleAreaChart--Container'>
				<span className='SimpleAreaChart--Title'>Durée moyenne des sessions</span>
				<ResponsiveContainer width='100%' height='100%'>
					<AreaChart
						data={data}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 10,
						}}
					>
						<CartesianGrid 
							vertical={false}
							horizontal={false}
							strokeDasharray='3 3'
							fill='#F00'
						/>
						<XAxis
							padding={{ left: 15, right: 15 }} //impossible de faire en sorte de coller la ligne, sinon on ne vois plus les étiquettes d'axe x
							dataKey='day'
							axisLine={false}
							tickLine={false}
							tickMargin={10}
							tickCount={7}
							tick={{ fill: '#fff', opacity: '0.4', fontSize: 12, fontFamily: 'Roboto' }}
							minTickGap={1}
							ticks={[1, 2, 3, 4, 5, 6, 7]} // Les jours de la semaine commencent à partir de 1
							tickFormatter={(tick) => {
								const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
								return daysOfWeek[tick - 1];
							}}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							type='number'
							domain={['dataMin', 'dataMax + 30']}
							hide={true}
						/>
						<Tooltip content={<CustomTooltip active={true} payload={data}/>} />
						<Area
							dataKey='sessionLength'
							type='natural'
							stroke='#FFF'
							strokeWidth={2}
							fill='none'
							dot={false}
							activeDot={{
								fill: '#FFF',
								r: 5,
								strokeWidth: 10,
								strokeOpacity: 0.4,
							}}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
