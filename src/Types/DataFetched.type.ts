export type userResponse = {
	user: {
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
		};
	};
};

export type activityResponse = {
	data: {
		userId: number;
		sessions:[
			{day: string; kilogram: number; calories: number;}
		]
	}
};

export type averageSessionsResponse = {
	data:{
		userId:number;
		sessions:[
			{day:number; sessionLength:number;}
		]
	}
};

export type performanceResponse = {
	data: {
		userId:number;
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

export type expectedFormatedOutputData = {
	user: {
		data: {
			id: number,
			userInfos: { firstName: 'string', lastName: 'string', age: number },
			todayScore: number,
			keyData: { calorieCount: number, proteinCount: number, carbohydrateCount: number, lipidCount: number }
		},
		activity: {
			sessions: [
				{ day: string, kilogram: number, calories: number },
			]
		},
		averageSessions: {
			sessions: [
				{ day: number, sessionLength: number },
			]
		},
		performance: {
			kind: {
				1: string,
				2: string,
				3: string,
				4: string,
				5: string,
				6: string
			},
			data: [
				{ value: number, kind: number },
			]
		}
	}
}

export type expectedUnformatedInputData = {
	user: {
		data: {
			id: number,
			userInfos: { firstName: 'string', lastName: 'string', age: number },
			todayScore: number,
			keyData: { calorieCount: number, proteinCount: number, carbohydrateCount: number, lipidCount: number }
		},
	},
	activity: {
		data: {
			userId: number,
			sessions: [
				{ day: string, kilogram: number, calories: number },
			]
		}
	},
	averageSessions: {
		data: {
			userId: number,
			sessions: [
				{ day: number, sessionLength: number },
			]
		}
	},
	performance: {
		data: {
			userId: number,
			kind: {
				1: string,
				2: string,
				3: string,
				4: string,
				5: string,
				6: string
			},
			data: [
				{ value: number, kind: number },
			]
		}
	}
}

export type userMockResponse = {
	data: {
		id: number;
		userInfos: {
			firstName: string;
			lastName: string;
			age: number;
		};
		todayScore?: number | undefined;
		keyData: {
			calorieCount: number;
			proteinCount: number;
			carbohydrateCount: number;
			lipidCount: number;
		};
		score?: number | undefined;
	};
};

export type activityMockResponse = {
	data: {
		userId: number;
		sessions:
			{day: string; kilogram: number; calories: number;}[]
	}
};

export type averageSessionsMockResponse = {
	data:{
		userId:number;
		sessions:
			{day:number; sessionLength:number;}[]
	}
};

export type performanceMockResponse = {
	data: {
		userId:number;
		kind: {
			1: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
		}
		data:
			{value: number; kind: number;}[]
	}
};