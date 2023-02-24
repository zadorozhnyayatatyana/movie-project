import {useParams} from "react-router-dom"

import {Header, MoviesListCard} from "../../components";
import {ThemeContext} from "../../contexts/themeContext/themeContext";
import css from './MoviePage.module.css';

const MoviePage = () => {

    const {id} = useParams();

    return (

        <ThemeContext.Consumer>
            {theme => (
                <div>
                    <div className={css.page}
                         datathema={`${theme.theme}`}>
                        <div datathema={`${theme.theme}`}>
                            <Header/>
                        </div>
                        <MoviesListCard key={id} id={id}/>
                    </div>
                </div>)}
        </ThemeContext.Consumer>
    );
};

export {
    MoviePage
}