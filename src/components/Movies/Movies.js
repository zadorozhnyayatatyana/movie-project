import {Link} from "react-router-dom";
import {Rating} from "react-simple-star-rating";

import {urls} from "../../configs";
import css from './Movies.module.css';

const Movies = ({movie}) => {

    const {id, title, poster_path, vote_average, vote_count} = movie;

    return (
        <div className={css.column}>
              <div>
                <div className={css.forBadge}>
                    <span className={css.inner} title={vote_count + ' votes'}>TMDB {vote_average}</span>
                    <div>
                        {poster_path &&
                            <img src={`${urls.poster.poster}${poster_path}`}
                                 alt={`${urls.poster.poster}${poster_path}`}/>}
                        {!poster_path &&
                            <div className={css.noPost}></div>}
                    </div>
                </div>
                <div>
                    <Link to={`${'/movies/'}${id.toString()}`}>{title}</Link>
                </div>
                <div><Rating initialValue={vote_average}
                             readonly={true}
                             iconsCount={10}
                             size={20}
                             allowFraction={true}/>
                </div>
            </div>

        </div>
    );
};

export {
    Movies
}