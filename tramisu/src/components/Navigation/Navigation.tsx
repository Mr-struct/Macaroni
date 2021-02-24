import React, { useState } from "react";
import { faIgloo, faSearch, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "components/Navigation/navigation.css";

type ActiveTabs = "music" | "search" | "propfil";

export type NavigationProps = {
	position: "is-fixed-top" | "is-fixed-bottom";
}
const Navigation: React.FC<NavigationProps> = ({position}: NavigationProps) => {
	
	const [active, setActive] = useState<ActiveTabs>("music");
	const isActive = (toBeActiveYouMust: boolean) => toBeActiveYouMust ? "is-active" : "";
	
	return (
		<div className={`navbar  ${position as string} tabs is-fullwidth is-medium`}>
			<ul>
				<li className={isActive(active === "music")}  onClick={()=> setActive("music")}>
					<Link to="/">
						<span className="icon is-medium"><FontAwesomeIcon icon={faIgloo}/></span>
					</Link>
				</li>
				<li className={isActive(active === "search")}  onClick={()=> setActive("search")}>
					<Link to="/search">
						<span className="icon is-medium"><FontAwesomeIcon icon={faSearch} /></span>
					</Link>
				</li>
				<li className={isActive(active === "propfil")}  onClick={()=> setActive("propfil")}>
					<Link to="/profil">
						<span className="icon is-medium"><FontAwesomeIcon icon={faUserCog}/></span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;