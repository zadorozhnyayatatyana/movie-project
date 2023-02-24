import {ThemeContext} from "../../contexts";
import {GenresList, Header, MoviePopular} from "../../components";
import css from "../MoviesPage/MoviesPage.module.css";

const MoviePopularPage = () => {

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div >
                    <div className={css.page}  datathema={`${theme.theme}`}>
                        <div>
                            <Header/>
                        </div>
                        <div className={css.wrap} datathema={`${theme.theme}`}>
                            <div className={css.genres}>
                                <GenresList/>
                            </div>
                            <MoviePopular/>
                        </div>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export {
    MoviePopularPage
}