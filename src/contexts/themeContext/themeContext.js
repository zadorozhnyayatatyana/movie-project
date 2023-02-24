import {createContext} from "react";

const themes = {
    dark: "dark",
    light: "light",
};

const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
});

export {
    themes,
    ThemeContext
}