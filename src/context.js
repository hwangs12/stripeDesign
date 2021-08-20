import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [showSubmenu, setShowSubmenu] = useState(false);
	const [submenuIndex, setSubmenuIndex] = useState(0);

	const handleShowSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	const handleShowSubmenu = (id) => {
		setShowSubmenu(true);
		setSubmenuIndex(id);
	};

	return (
		<AppContext.Provider
			value={{
				showSidebar,
				handleShowSidebar,
				showSubmenu,
				handleShowSubmenu,
				sublinks,
				submenuIndex,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
