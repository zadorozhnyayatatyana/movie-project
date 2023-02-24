import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";

import css from './MoviesListCard.module.css';
import {urls} from "../../configs";
import YouTube from "react-youtube";

const MoviesListCard = ({id}) => {

    const {selectedMovie, video} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const opts = {
        height: '390',
        widths: '640',
        playerVars: {
            autoplay: 0,
        },
    }

    useEffect(() => {
        dispatch(movieActions.getById({id}))
    }, [dispatch])

    useEffect(() => {
        dispatch(movieActions.getVideo({id}))
    }, [dispatch])


    return (
        <div>
            {selectedMovie &&
                <article className={css.article}>
                    <div className={css.fcols}>
                        <div className={css.fleft}>
                            <div className={css.fimg}>
                                {selectedMovie.poster_path &&
                                    <img src={`${urls.poster.poster}${selectedMovie.poster_path}`}
                                         alt={`${urls.poster.poster}${selectedMovie.poster_path}`}/>}
                                {!selectedMovie.poster_path &&
                                    <div className={css.noPost}></div>}
                            </div>
                        </div>

                        <div className={css.fright}>
                            <div className={css.shortHeader}>
                                <div className={css.fx1}>
                                    <h3 className={css.shortTitle}>
                                        <div>
                                            <span>{selectedMovie.title}</span>
                                        </div>

                                    </h3>

                                </div>
                                <div className={css.shortRates}>

                                </div>
                            </div>

                            <div className={css.block_table}>
                                <ul>
                                    <li>Tagline:</li>
                                    <li>Year:</li>
                                    <li>Countries:</li>
                                    <li>Languages:</li>
                                    <li>Genres:</li>
                                </ul>
                                <ul className={css.ul2}>
                                    <li>"{selectedMovie.tagline}"</li>
                                    <li>{new Date(selectedMovie.release_date).getFullYear()}</li>
                                    <li> {selectedMovie.production_countries.map(countrie => countrie.name).join(', ')}</li>
                                    <li>{selectedMovie.spoken_languages.map(language => language.english_name).join(', ')}</li>
                                    <li>{selectedMovie.genres.map(gen => gen.name).join(', ')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <hr/>
                        <span> {selectedMovie.overview}</span>

                        {video &&

                            <div>
                                {video.find(v => v.type === "Trailer") &&
                                    <YouTube videoId={video.find(v => v.type === "Trailer").key}
                                             opts={opts}
                                             iframeClassName={css.video}/>
                                }
                                {!video.find(v => v.type === "Trailer") &&

                                    <YouTube videoId={video[0].key}
                                             opts={opts}
                                             iframeClassName={css.video}/>
                                }
                            </div>
                        }
                        {!video &&
                           <div>
                               No video
                           </div>
                        }

                        <h1>Reviews</h1>
                        <div className={css.addComs}>
                            <textarea name="postContent"
                                      rows={10}
                                      cols={152}
                                      placeholder="Write a review"/>
                            {/*https://api.themoviedb.org/3/movie/646389/reviews*/}

                            <button className={css.buttonRev}>Add</button>
                        </div>


                    </div>
                </article>
            }
        </div>


    );
};

export {
    MoviesListCard
}