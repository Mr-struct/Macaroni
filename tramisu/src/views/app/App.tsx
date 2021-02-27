import React, {useContext} from "react";
import Navigation from "components/navigation/Navigation";
import BulmaThemeApp, {Theme, ThemeContext} from "config/BulmaThemeApp";
import useCheckMobileScreen from "tools/useCheckMobileScreen";

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Streams from "views/streams/Streams";
import Search from "views/search/Search";
import Profil from "views/profile/Profil";
import SignUp from "views/sign-up/SignUp";
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
	const appTheme = localStorage.getItem("macaroniTheme") || "default";
	return (
		<Router>
			<ThemeContext.Provider value={{theme: themeContext.theme, setTheme: themeContext.setTheme}} >
				<BulmaThemeApp theme={appTheme as Theme}>
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
							<Route path="/sign-up">
								<SignUp/>
							</Route>
						</Switch>
					</div>
					{bottomNavigation}
				</BulmaThemeApp>
			</ThemeContext.Provider>
		</Router>);
};

export default App;