import React, {useEffect, useState} from "react";

/**
 * Funtion that returns true if the user is on mobile or in desktop
 */
const useCheckMobileScreen = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);
	return (width <= 768);
};

export default useCheckMobileScreen;