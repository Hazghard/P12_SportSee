/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ToggleContextType, useToggleContext } from '@/Context/ToggleMockContext';
import { UserIdCreateContext, useUserIdContext } from '@/Context/UserIdContext';
import { UsersContextValue, useUsersDataContext } from '@/Context/UsersDataContext';
import FetchUser from '@/_Services/UsersInfo.service';

import MessageAcceuil from '@/Components/MessageAcceuil/MessageAcceuil';
import Error from '@/Components/FetchError/Error';
import KeyData from '@/Components/KeyData/KeyData';
import BiaxialBarChart from '@/Components/BiaxialBarChart/BiaxialBarChart';
import SimpleAreaChart from '@/Components/SimpleAreaChart/SimpleAreaChart';
import SimpleRadarChart from '@/Components/SimpleRadarChart/SimpleRadarChart';
import PieChart from '@/Components/PieChart/PieChart';

import { heatIcon, chickenIcon, carbsIcon, burgerIcon } from '@/assets/images/SVG';


import './home.css';
import { ThreeDots } from 'react-loader-spinner';


const Home = () => {
	const { toggleState }: ToggleContextType = useToggleContext();
	const { userId }: UserIdCreateContext = useUserIdContext();
	const { user, setUsersDataContext}: UsersContextValue = useUsersDataContext();

	const [ dataFetchState, setDataFetchState] = useState<boolean>(false);

	const [ dataLoading, setDataLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData = await FetchUser(toggleState, userId);
				setUsersDataContext(userData);
				setDataFetchState(true);
				setDataLoading(false);
			} catch (error) {
				console.error('Error fetching user:', error);
				setDataFetchState(false);
				setDataLoading(false);
			}
		};
		fetchData();
	}, [toggleState, userId]);

	console.log('user from Home',user,'toggleState',toggleState);

	return (
		<section className={`HomeContainerSection ${dataLoading ? 'loading' : ''}`}>
			{dataLoading ? (
				<ThreeDots
					height='80'
					width='80'
					radius='9'
					color='#B31312'
					ariaLabel='three-dots-loading'
					wrapperStyle={{}}
					wrapperClass='Loader'
					visible={true}
				/>
			) : (
				dataFetchState ? (
					<>
						<MessageAcceuil userFirstName={user.user.data.userInfos.firstName}/>
						<div className='DataContainer'>
							<div className='GraphsContainer'>
								<BiaxialBarChart userActivitySessions={user.activity.data.sessions}/>
								<div className='LowerChartsContainer'>
									<SimpleAreaChart userAverageSessions={user.averageSessions.data.sessions}/>
									<SimpleRadarChart userPerformance={user.performance.data}/>
									<PieChart todayScore={user.user.data.todayScore ?? user.user.data.score} />
									{/*La partie  ?? user.user.data.score est uniquement due à une erreur BackEnd, les données ne sont pas constantes, une fois la key todayScore puis score */}
								</div>
							</div>
							<div className='KeyDataContainer'>
								<KeyData svg={heatIcon as React.ReactElement} value={user.user.data.keyData.calorieCount} valueUnit='kCal' unit={'Calories'}/>
								<KeyData svg={chickenIcon as React.ReactElement} value={user.user.data.keyData.proteinCount} valueUnit='g' unit={'Proteines'}/>
								<KeyData svg={carbsIcon as React.ReactElement} value={user.user.data.keyData.carbohydrateCount} valueUnit='g' unit={'Glucides'}/>
								<KeyData svg={burgerIcon as React.ReactElement} value={user.user.data.keyData.lipidCount} valueUnit='g' unit={'Lipides'}/>
							</div>
						</div>
					</>
				) : (
					<Error/>
				)
			)}
		</section>
	);
};

export default Home;



