import {Link} from "react-router-dom";
import {useState} from "react";

import {ThemeContext, themes} from "../../contexts/themeContext/themeContext";
import css from './Header.module.css';

const Header = () => {

    const [inputOne, setInputOne] = useState('');

    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeContext.Consumer>
            {theme => (
        <div>


            {/*<div className={css.Header} >*/}
            <div className={css.Header}
                datathema={`${theme.theme}`}>
                <div className={css.item1}>
                    <div className={css.logo}>
                        <span>Mega</span>
                        Films
                    </div>
                </div>

                <div className={css.item2}>
                    <div className={css.item21}>
                        <div className={css.flex}>
                            <input onChange={(event) => setInputOne(event.target.value)}
                                   className={css.inputSearch}/>

                            <Link to={`${'/search/movie/'}${inputOne}`}>
                                <button className={css.buttonSearch}></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>


                    <ThemeContext.Consumer>
                        {({changeTheme}) => (
                            <button className={css.buttonfind} onClick={() => {
                                setDarkMode(!darkMode);
                                changeTheme(darkMode ? themes.light : themes.dark);
                            }}>
                            </button>

                        )}
                    </ThemeContext.Consumer>


                </div>
                <div className={css.item3}></div>
            </div>
            <div className={css.menu} >
                <ul className={css.menuNavTop}>
                    <li>
                        <Link to={'/'}>FILMS</Link>
                    </li>
                    <li>
                        <Link to={'/movie/top_rated'}>TOP</Link>
                    </li>
                    <li>
                        <Link to={'/movie/popular'}>POPULAR</Link>
                    </li>
                </ul>

            </div>


        </div>
            )}
        </ThemeContext.Consumer>
    );
};

export {
    Header
}