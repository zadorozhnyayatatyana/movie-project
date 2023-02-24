import {Link} from "react-router-dom";

import css from './Genre.module.css';

const Genre = ({genre}) => {
    const {id, name} = genre;

    return (
        <div>
            <Link to={`${'/movies/with_genres/'}${id}`}>
                <button className={css.buttonGenre}>{name}</button>
            </Link>
        </div>
    );
};

export {
    Genre
}