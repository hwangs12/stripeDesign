import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
	const {
		sublinks,
		showSubmenu,
		submenuIndex,
		handleShowSubmenu,
		handleMouseLeave,
		location,
	} = useGlobalContext();
	const menuRef = useRef(null);
	useEffect(() => {
		if (location) {
			console.log(location);
			menuRef.current.style.left = `${
				parseInt(location.left) + parseInt(location.width) / 2
			}px`;
		}
	}, [location]);

	return (
		<aside
			className={`submenu ${showSubmenu && "show"}`}
			onMouseLeave={handleMouseLeave}
			ref={menuRef}
		>
			{sublinks[submenuIndex] && (
				<section>
					<h4>{sublinks[submenuIndex].page}</h4>
					<div
						className={`submenu-center col-${sublinks[submenuIndex].links.length}`}
					>
						{sublinks[submenuIndex].links.map((link, _i) => {
							const { label, icon, url } = link;
							return (
								<a key={_i} href={url}>
									{icon}
									{label}
								</a>
							);
						})}
					</div>
				</section>
			)}
		</aside>
	);
};

export default Submenu;
