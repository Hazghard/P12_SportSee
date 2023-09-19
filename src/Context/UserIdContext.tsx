import React, { useState, createContext, useContext, ReactNode } from 'react';


interface ChildrenTypeReactNode {
    children: ReactNode;
}

export interface UserIdCreateContext {
    userId: number;
    setUserIdContext: (id:number) => void;
}

export const UserIdContext = createContext<UserIdCreateContext>({
	userId: 12,
	setUserIdContext: (id:number) => {throw new Error('useToggleContext must be used within a ToggleContextProvider');},
});

export const UserIdContextProvider = ({ children }: ChildrenTypeReactNode) => {
	const [userId, setUserId] = useState<number>(12);

	const setUserIdContext = (id: number) => {
		setUserId(id);
	};

	const contextValue: UserIdCreateContext = {
		userId,
		setUserIdContext,
	};

	return (
		<UserIdContext.Provider value={contextValue}>
			{children}
		</UserIdContext.Provider>
	);
};

// Export du hook contexte avec generation d'erreur
export const useUserIdContext = () => {
	const context = useContext(UserIdContext);
	return context;
};