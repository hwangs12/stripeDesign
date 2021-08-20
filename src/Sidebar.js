import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
	const { showSidebar, handleShowSidebar } = useGlobalContext();
	return (
		<div className={`sidebar-wrapper ${showSidebar && "show"}`}>
			<aside className="sidebar">
				<button className="close-btn" onClick={handleShowSidebar}>
					<FaTimes />
				</button>
				<div className="sidebar-links">
					{sublinks.map((category, index) => {
						return (
							<article key={index}>
								<h4>{category.page}</h4>
								<div className="sidebar-sublinks">
									{category.links.map((link, _i) => {
										const { url, icon, label } = link;
										return (
											<a key={_i} href={url}>
												{icon}
												{label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
