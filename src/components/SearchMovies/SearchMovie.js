import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {Link, useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {Movies} from "../Movies/Movies";
import css from './SearchMovie.module.css';

const SearchMovie = () => {

    const {search} = useParams();

    const {movies, prev, next} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [queryP, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(movieActions.searchMovies({page: queryP.get('page'), query:search}))
    }, [dispatch, queryP, search])

    return (

        <div>
            <div className={css.container}>
                {movies.map(movie => <Movies key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.buttonContainer}>
                <button className={css.buttonG}
                        disabled={prev > 1 ? false : true}
                        onClick={() => setQuery(query => ({page: +queryP.get('page') - 1}))}>prev
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
    SearchMovie
}