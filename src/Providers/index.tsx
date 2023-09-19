import React, { ReactNode } from 'react';

import {UsersDataContextProvider} from '@/Context/UsersDataContext';
import {ToggleContextProvider} from '@/Context/ToggleMockContext';
import {UserIdContextProvider} from '@/Context/UserIdContext';

interface Props {
    children: ReactNode;
}


const GlobalProviders = ({ children }: Props) => {
	return (
		<UsersDataContextProvider>
			<ToggleContextProvider>
				<UserIdContextProvider>
					{children}
				</UserIdContextProvider>
			</ToggleContextProvider>
		</UsersDataContextProvider>
	);
};

export default GlobalProviders;
