const baseURL = 'https://api.themoviedb.org/3';

const movie = '/discover/movie';
const genre = '/genre/movie/list';
const poster = 'https://image.tmdb.org/t/p/w500';
const movieById = '/movie';
const search = '/search/movie';
const top = 'movie/top_rated';
const popular = 'movie/popular';

const urls = {
    movies:{
        movie,
        movieById,
        search,
        top,
        popular
    },
    genres:{
        genre
    },
    poster:{
        poster
    }
}

export {
    baseURL,
    urls
}

