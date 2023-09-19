import axios, { AxiosResponse } from 'axios';
import { userResponse, activityResponse, averageSessionsResponse, performanceResponse } from '@/Types/DataFetched.type';

async function getUserData(userId: number): Promise<{ user: userResponse, activity: activityResponse, averageSessions: averageSessionsResponse, performance: performanceResponse }> {
	try {
		const [userResponse, activityResponse, averageSessionsResponse, performanceResponse] = await Promise.all([
			axios.get<userResponse>(`http://localhost:3000/user/${userId}`),
			axios.get<activityResponse>(`http://localhost:3000/user/${userId}/activity`),
			axios.get<averageSessionsResponse>(`http://localhost:3000/user/${userId}/average-sessions`),
			axios.get<performanceResponse>(`http://localhost:3000/user/${userId}/performance`),
		]);

		const userData = userResponse.data;
		const activityData = activityResponse.data;
		const averageSessionsData = averageSessionsResponse.data;
		const performanceData = performanceResponse.data;

		console.log('usersDataResponse:', userData, activityData,averageSessionsData,performanceData);
		
		return { user: userData, activity: activityData, averageSessions: averageSessionsData, performance: performanceData };
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export default getUserData;
