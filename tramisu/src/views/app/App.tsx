import React, { useContext } from "react";
import BulmaThemeApp, { Context, Theme, ThemeContext } from "react-bulma-theme";
import useCheckMobileScreen from "tools/useCheckMobileScreen";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import Room from "views/room/Room";
import ThemeSelector from "components/theme-selector/ThemeSelector";
import Home from "views/home/Home";

const firebaseConfig = {
	apiKey: "AIzaSyDmdme8T1U_wbHkoto0Ymh06paAj_GN1a4",
	authDomain: "macaroni-e2318.firebaseapp.com",
	projectId: "macaroni-e2318",
	storageBucket: "macaroni-e2318.appspot.com",
	messagingSenderId: "268080890364",
	appId: "1:268080890364:web:a0cb5b71f5ba1975a23279",
	measurementId: "G-RE2LQQGD5H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const App: React.FC = () => {

	const isMobile = useCheckMobileScreen();

	const themeContext = useContext<Context>(ThemeContext);
	const appTheme = localStorage.getItem("macaroniTheme") || "default";

	return (
		<Router>
			<ThemeContext.Provider value={{ theme: themeContext.theme, setTheme: themeContext.setTheme }} >
				<BulmaThemeApp theme={appTheme as Theme}>
					<div className="container" style={{ marginTop: isMobile ? 0 : 80 }}>
						<ThemeSelector />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/room/:roomkey">
								<Room />
							</Route>
						</Switch>
					</div>
				</BulmaThemeApp>
			</ThemeContext.Provider>
		</Router>);
};

export default App;