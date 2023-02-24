import {themes, ThemeContext} from "./themeContext";
import {useEffect, useState} from "react";

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.dark);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('light');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('light');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}