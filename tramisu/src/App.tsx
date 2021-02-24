import React, {useContext} from "react";
import Navigation from "./components/Navigation/Navigation";
import BulmaThemeApp, {ThemeContext} from "./config/BulmaThemeApp";
import useCheckMobileScreen from "./tools/useCheckMobileScreen";

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Streams from "views/Streams";
import Search from "views/Search";
import Profil from "views/Profil";
const App: React.FC = () => {
	
	const isMobile = useCheckMobileScreen();
	let topNavigation = null;
	let bottomNavigation = null;
	if (isMobile) {
		bottomNavigation = <Navigation position="is-fixed-bottom"/>;
	}
	else {
		topNavigation = <Navigation position="is-fixed-top"/>;
	}
	const themeContext = useContext(ThemeContext);
	return (
		<Router>
			<ThemeContext.Provider value={{theme: themeContext.theme, setTheme: themeContext.setTheme}} >
				<BulmaThemeApp>
					{topNavigation}
					<div className="container" style={{ marginTop: isMobile ? 0 : 80 }}>
						<Switch>
							<Route exact path="/">
								<Streams />
							</Route>
							<Route path="/search">
								<Search/>
							</Route>
							<Route path="/profil">
								<Profil />
							</Route>
						</Switch>
					</div>
					{bottomNavigation}
				</BulmaThemeApp>
			</ThemeContext.Provider>
		</Router>);
};

export default App;