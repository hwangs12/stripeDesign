import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
	const { sublinks, showSubmenu, submenuIndex } = useGlobalContext();
	return (
		<aside className={`submenu ${showSubmenu && "show"}`}>
			<section>
				<h4>{sublinks[submenuIndex].page}</h4>
				<div className="submenu-center col-4">
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
		</aside>
	);
};

export default Submenu;
