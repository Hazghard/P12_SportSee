import React, { useState, createContext, useContext, ReactNode } from 'react';

export interface ToggleContextType {
    toggleState: string;
    toggleSwitchContext: () => void;
}
interface ToggleContextProviderProps {
    children: ReactNode;
}


export const ToggleContext = createContext<ToggleContextType>({
	toggleState: 'API',
	toggleSwitchContext: ()=>{throw new Error('useToggleContext must be used within a ToggleContextProvider');},
});

export const ToggleContextProvider = ({ children }: ToggleContextProviderProps) => {
	const [toggleState, setToggleState] = useState<string>('API');

	const toggleSwitchContext = () => {
		setToggleState(toggleState === 'API' ? 'MOCK' : 'API');
	};

	const contextValue: ToggleContextType = {
		toggleState,
		toggleSwitchContext,
	};

	return (
		<ToggleContext.Provider value={contextValue}>
			{children}
		</ToggleContext.Provider>
	);
};

// Export du contexte avec generation d'erreur
export const useToggleContext = (): ToggleContextType => {
	const context = useContext<ToggleContextType>(ToggleContext);
	return context;
};