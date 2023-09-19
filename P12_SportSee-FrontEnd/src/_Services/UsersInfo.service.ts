import React from 'react';
import getUserData from '@/_Services/FetchClientData.service';
import { userResponse, activityResponse, averageSessionsResponse, performanceResponse } from '@/Types/DataFetched.type';
import { userMockResponse, activityMockResponse, averageSessionsMockResponse, performanceMockResponse } from '@/Types/DataFetched.type';

import MockedUsersData from '@/assets/Mock/UserInfo.json';

const FetchUser = async (toggleState: string, userId: number) => {
	if (toggleState === 'API') {
		const userDataResponse = await getUserData(userId);
		return userDataResponse;
	} else {
		const mockUser = MockedUsersData.find((user) => user.user.data.id === userId);
		console.log('mockUser',mockUser);

		if (mockUser) {
			const userDataResponse: {
				user: userMockResponse;
				activity: activityMockResponse;
				averageSessions: averageSessionsMockResponse;
				performance: performanceMockResponse;
			} = {
				user: {
					data: {
						id: mockUser.user.data.id,
						userInfos: {
							firstName: mockUser.user.data.userInfos.firstName,
							lastName: mockUser.user.data.userInfos.lastName,
							age: mockUser.user.data.userInfos.age,
						},
						todayScore: mockUser.user.data.todayScore,
						keyData: mockUser.user.data.keyData,
					},
				},
				activity: {
					data: {
						userId: userId,
						sessions: mockUser.activity.data.sessions,
					},
				},
				averageSessions: {
					data: {
						userId: userId,
						sessions: mockUser['average-sessions'].data.sessions,
					},
				},
				performance: {
					data: {
						userId: userId,
						kind: mockUser.performance.data.kind,
						data: mockUser.performance.data.data,
					},
				},
			};
			console.log('userDataResponse', userDataResponse);
			return userDataResponse;
		} else {
			throw new Error('Unmatched data');
		}
	}
};

export default FetchUser;
