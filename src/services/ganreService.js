import {apiService} from "./apiService";
import {urls} from "../configs";

const genreService = {
    getAll: ()=>apiService.get(urls.genres.genre),
}

export {
    genreService
}