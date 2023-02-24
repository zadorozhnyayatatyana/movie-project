import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {Movies} from "../Movies/Movies";
import css from './MoviesByGenre.module.css';

const MoviesByGenre = () => {

    const {with_genres} = useParams();

    const {movies, prev, next} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [queryP, setQuery] = useSearchParams({page: '1'});

    const [query, setPar] = useSearchParams({with_genres: ''});

    useEffect(() => {
        dispatch(movieActions.getByGenre({page: queryP.get('page'), with_genres: with_genres}))
    }, [dispatch, queryP, with_genres])

    return (
        <div>
            <div className={css.container}>
                {movies.map(movie => <Movies key={movie.id}
                                             movie={movie}/>)}
            </div>
            <div className={css.buttonContainer}>
                <button className={css.buttonG}
                        disabled={prev > 1 ? false : true}
                        onClick={() => setQuery(query => ({page: +queryP.get('page') - 1}))}>previous
                </button>
                <button className={css.buttonG}
                        disabled={!next}
                        onClick={() => setQuery(query => ({page: +queryP.get('page') + 1}))}>next
                </button>
            </div>
        </div>
    );
};

export {
    MoviesByGenre
}