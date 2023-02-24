import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getAll: (page=1) => apiService.get(urls.movies.movie, {params:{page}}),
    getById:(id)=>apiService.get(`${urls.movies.movieById}/${id}`),
    searchMovies:(page=1, query)=>apiService.get(urls.movies.search, {params:{page, query}}),
    getByGenre:(page=1, with_genres)=>apiService.get(urls.movies.movie,{params:{page, with_genres}}),
    getVideo:(id)=>apiService.get(`${urls.movies.movieById}/${id}/${'videos'}`),
    getTop: (page=1) => apiService.get(urls.movies.top, {params:{page}}),
    getPopular: (page=1) => apiService.get(urls.movies.popular, {params:{page}}),
}

export {
    movieService
}