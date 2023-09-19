// Service qui permet la recuperation de l'ensemble des users depuis le Mock.json
// Permet de realiser la fonction de maj du contexxte des Users
// N'influe pas sur le Context des user 

import JSONUserData from '@/assets/Mock/UserInfo.json';

type UserData = {
	user: {
		data: {
			id: number;
			userInfos: {
				firstName: string;
				lastName: string;
			};
		};
	};
};

const extractUserNames = (data: UserData[]): { id: number; firstName: string; lastName: string }[] => {
	const userNames: { id: number; firstName: string; lastName: string }[] = [];

	data.forEach((item) => {
		const { id, userInfos } = item.user.data;
		const { firstName, lastName } = userInfos;
		userNames.push({ id, firstName, lastName });
	});

	return userNames;
};

//Liste de données au format JSON
const jsonData: UserData[] = JSONUserData;
const userNamesArray = extractUserNames(jsonData);

export default userNamesArray;