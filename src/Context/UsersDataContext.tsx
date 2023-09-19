import React, { useState, createContext, useContext, ReactNode } from 'react';
 
interface ChildrenTypeReactNode {
    children: ReactNode;
}

export interface UsersDataCreateContext {
	user:{
		data: {
			id: number;
			userInfos: {
				firstName: string;
				lastName: string;
				age: number;
			};
			todayScore: number;
			keyData: {
				calorieCount: number;
				proteinCount: number;
				carbohydrateCount: number;
				lipidCount: number;
			}
		}
	};
	activity:{
		data:{
			sessions:[
				{day: string; kilogram: number; calories: number;}
			]
		}
	}
	averageSessions:{
		data:{
			sessions:[
				{day:number; sessionLength:number;}
			]
		}
	}
	performance:{
		data:{
			kind: {
				1: string;
				2: string;
				3: string;
				4: string;
				5: string;
				6: string;
			}
			data:[
				{value: number; kind: number;}
			]
		}
	};
}

export interface UsersContextValue {
	user: UsersDataCreateContext,
	setUsersDataContext: (fetchedUsersData: UsersDataCreateContext) => void,
}


export const UsersDataContext = createContext<UsersContextValue>({
	user: {
		user:{
			data: {
				id: 0,
				userInfos: {
					firstName: 'string',
					lastName: 'string',
					age: 1,
				},
				todayScore: 0,
				keyData: {
					calorieCount: 0,
					proteinCount: 0,
					carbohydrateCount: 0,
					lipidCount: 0,
				},
			},
		},
		activity:{
			data:{
				sessions:[
					{day: 'string', kilogram: 0, calories: 0},
				],
			},
		},
		averageSessions:{
			data:{
				sessions:[
					{day:0, sessionLength:0},
				],
			},
		},
		performance:{
			data:{
				kind: {
					1: 'string',
					2: 'string',
					3: 'string',
					4: 'string',
					5: 'string',
					6: 'string',
				},
				data:[
					{value: 0, kind: 0},
				],
			},
		},
	},
	setUsersDataContext: () => {throw new Error('UsersDataContext must be used within a ToggleContextProvider');},
});


// __________________________________________________________________________________________________________________
// __________________________________________________________________________________________________________________
// __________________________________________________________________________________________________________________
// __________________________________________________________________________________________________________________
// __________________________________________________________________________________________________________________
// __________________________________________________________________________________________________________________


export const UsersDataContextProvider = ({ children }: ChildrenTypeReactNode) => {
	const [usersData, setUsersData] = useState<UsersDataCreateContext>({
		user:{
			data: {
				id: 0,
				userInfos: {
					firstName: 'string',
					lastName: 'string',
					age: 1,
				},
				todayScore: 0,
				keyData: {
					calorieCount: 0,
					proteinCount: 0,
					carbohydrateCount: 0,
					lipidCount: 0,
				},
			},
		},
		activity:{
			data:{
				sessions:[
					{day: 'string', kilogram: 0, calories: 0},
				],
			},
		},
		averageSessions:{
			data:{
				sessions:[
					{day:0, sessionLength:0},
				],
			},
		},
		performance:{
			data:{
				kind: {
					1: 'string',
					2: 'string',
					3: 'string',
					4: 'string',
					5: 'string',
					6: 'string',
				},
				data:[
					{value: 0, kind: 0},
				],
			},
		},
	});

	const setUsersDataContext = (fetchedUsersData:UsersDataCreateContext) => {
		setUsersData(fetchedUsersData);
	};

	const contextValue:UsersContextValue = {
		user: usersData,
		setUsersDataContext,
	};

	return (
		<UsersDataContext.Provider value={contextValue}>
			{children}
		</UsersDataContext.Provider>
	);
};

// Export du hook contexte avec generation d'erreur
export const useUsersDataContext = (): UsersContextValue => {
	const context = useContext<UsersContextValue>(UsersDataContext);
	return context;
};
