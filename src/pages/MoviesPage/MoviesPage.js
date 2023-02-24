import {useNavigate, useParams, useSearchParams} from "react-router-dom";

import {GenresList, Header, MoviesByGenre, MoviesList, SearchMovie} from "../../components";
import {ThemeContext} from "../../contexts/themeContext/themeContext";
import css from './MoviesPage.module.css';

const MoviesPage = () => {
    const navigate = useNavigate();

    const {search, with_genres} = useParams();

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
                            {search &&
                            <div>
                                <SearchMovie/>
                            </div>}
                            {with_genres&&
                                <div>
                                    <MoviesByGenre/>
                                </div>}
                            {!search && !with_genres &&
                                <MoviesList/>
                            }
                        </div>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export {
    MoviesPage
}