import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import css from './MoviesList.module.css';
import {Movies} from "../Movies/Movies";

const MoviesList = () => {

    const {movies, prev, next} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});

        useEffect(() => {
            dispatch(movieActions.getMovies({page: query.get('page')}))
        }, [dispatch, query])

    return (

        <div>

            <div className={css.container}>
                {movies.map(movie => <Movies key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.buttonContainer}>
                <button className={css.buttonG} disabled={prev>1?false:true} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>previous</button>
                <button className={css.buttonG} disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
        </div>
    );
};

export {
    MoviesList
}