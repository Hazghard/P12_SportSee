import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import './simpleRadarChart.css';

interface UserPerformanceType {
  userPerformance: {
    kind: {
      1: string,
      2: string,
      3: string,
      4: string,
      5: string,
      6: string,
    },
    data: [
      { value: number, kind: number },
    ],
  };
}

interface DataType {
  data: {
    value: number;
    kind: string;
  }[];
}

const kindReplacer: { [key: number]: string } = {
	1: 'Cardio',
	2: 'Energie',
	3: 'Endurance',
	4: 'Force',
	5: 'Vitesse',
	6: 'Intensité',
};

export default class Example extends PureComponent<UserPerformanceType> {
	render() {
		const { userPerformance } = this.props;
		const data: DataType = {
			data: userPerformance.data.map(item => ({
				value: item.value,
				kind: kindReplacer[item.kind],
			})),
		};
		data.data.reverse();
		return (
			<div className='RadarGraph--Container'>
				<ResponsiveContainer width='100%' height='100%'>
					<RadarChart
						cx='50%'
						cy='50%'
						outerRadius='65%'
						data={data.data}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
						}}
					>
						<PolarGrid radialLines={false} stroke='#fff' />
						<PolarAngleAxis
							dataKey='kind'
							tickLine={false}
							axisLine={false}
							tickSize={15}
							stroke='#FFF'
							fontSize={12}
							fontFamily='Roboto'
						/>
						<Radar
							name='Radar'
							dataKey='value'
							fill='#FF0101'
							fillOpacity={0.6}
							legendType='none'
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
