import React, {useState} from "react";
export const bulmaThemes = [
	"default",
	"cerulean",
	"cosmo",
	"cyborg",
	"darkly",
	"flatly",
	"journal",
	"litera",
	"lumen",
	"lux",
	"materia",
	"minty",
	"nuclear",
	"pulse",
	"sandstone",
	"simplex",
	"slate",
	"solar",
	"spacelab",
	"superhero",
	"united",
	"yeti"] as const;

export type Theme = typeof bulmaThemes[number];

export type BulmaThemeAppProps = {
	theme?: Theme,
	className?:string,
}
type context = {
	theme:Theme,
	// eslint-disable-next-line @typescript-eslint/ban-types
	setTheme:(theme:Theme)=> void
}
export  const ThemeContext = React.createContext<context>({
	theme: "default",
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setTheme: (theme: Theme) => {}
}
);

export const useSelectBulmaTheme = (defaultTheme: Theme) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	const setThemeContext = (defaultTheme: Theme) => {
		setTheme(defaultTheme);
	};
	return {theme, setThemeContext};
};

// eslint-disable-next-line react/prop-types
const BulmaThemeApp: React.FC<BulmaThemeAppProps> = ({ theme = "default", children, className }) => {
	const themeContext = useSelectBulmaTheme(theme);
	return(
		<ThemeContext.Provider value={{theme:themeContext.theme, setTheme:themeContext.setThemeContext}}>
			<div className={className}>
				<link media="all" rel="stylesheet" href={`https://jenil.github.io/bulmaswatch/${themeContext.theme}/bulmaswatch.min.css`}/>
				{children}
			</div>
		</ThemeContext.Provider>);
};
export default BulmaThemeApp;