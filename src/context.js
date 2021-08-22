import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [showSubmenu, setShowSubmenu] = useState(false);
	const [submenuIndex, setSubmenuIndex] = useState(null);
	const [location, setLocation] = useState(null);

	const handleShowSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	const handleShowSubmenu = (e, id) => {
		const square = e.target.getBoundingClientRect();
		setLocation({
			top: square.top,
			bottom: square.bottom,
			left: square.left,
			right: square.right,
			width: square.width,
		});
		setShowSubmenu(true);
		setSubmenuIndex(id);
	};

	const handleMouseLeave = () => {
		setShowSubmenu(false);
		setSubmenuIndex(null);
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
				handleMouseLeave,
				location,
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
