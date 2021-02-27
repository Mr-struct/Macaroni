import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useContext} from "react";
import {bulmaThemes, Theme, ThemeContext} from "config/BulmaThemeApp";



const ThemeSelector: React.FC = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<div className="control has-icons-left">
			<div className="select is-info">
				<select onChange={({target}) => {
					themeContext.setTheme(target.value as Theme);
					localStorage.setItem("macaroniTheme", target.value);
				}}
				defaultValue={localStorage.getItem("macaroniTheme") || "default"}
				>
					{
						bulmaThemes.map(theme =>
							<option key={theme} value={theme}>{theme}</option>
						)
					}
				</select>
			</div>
			<div className="icon is-small is-left">
				<FontAwesomeIcon icon={faPalette} />
			</div>
		</div>
	);
};


export default ThemeSelector;