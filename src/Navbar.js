import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import pages from "./data";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const { handleShowSidebar, handleShowSubmenu, closeSubmenu } =
		useGlobalContext();
	return (
		<nav className="nav" onMouseOver={(e) => closeSubmenu(e)}>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="" className="nav-logo" />
					<button
						className="btn toggle-btn"
						onClick={handleShowSidebar}
					>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					{pages.map((category, index) => {
						const { page } = category;
						return (
							<li key={index}>
								<button
									className="link-btn"
									onMouseEnter={(e) =>
										handleShowSubmenu(e, index)
									}
								>
									{page}
								</button>
							</li>
						);
					})}
				</ul>
				<button className="btn signin-btn">Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
