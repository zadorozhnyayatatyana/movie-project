import {GenresList, Header, SearchMovie} from "../../components";
import {ThemeContext} from "../../contexts";
import css from "../MoviesPage/MoviesPage.module.css";

const NotFoundPage = () => {
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

                            <div className={css.notFound}>
                                Not Found
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export {
    NotFoundPage
}