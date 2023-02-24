import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviePage, MoviePopularPage, MoviesPage, MovieTopPage, NotFoundPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} exact={true} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                 <Route path={'movies'} element={<MoviesPage/>}/>*/}
                 <Route path={'/movies/:id'} element={<MoviePage/>}/>
                 <Route path={'/search/movie/:search'} element={<MoviesPage/>}/>
                <Route path={'/movies/with_genres/:with_genres'} element={<MoviesPage/>}/>
                <Route path={'/movie/top_rated'} element={<MovieTopPage/>}/>
                <Route path={'/movie/popular'} element={<MoviePopularPage/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export {
    App
}
