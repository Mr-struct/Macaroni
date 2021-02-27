import ThemeSelector from "components/theme-selector/ThemeSelector";
import React from "react";
import Login from "views/login/Login";
const Profil: React.FC = () =>
	<>
		<ThemeSelector />
		<Login/>
	</>;

export default Profil;