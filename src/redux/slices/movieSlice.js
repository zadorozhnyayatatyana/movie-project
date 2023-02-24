import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    prev: null,
    next: null,
    selectedMovie: null,
    video: null,
    errors: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
                 } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getPopular = createAsyncThunk(
    'movieSlice/getPopular',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getPopular(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getTop = createAsyncThunk(
    'movieSlice/getTop',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getTop(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const searchMovies = createAsyncThunk(
    'movieSlice/searchMovies',
    async ({page, query}, thunkAPI) => {
        try {
            const {data} = await movieService.searchMovies(page, query);
            // console.log(current(search));
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getByGenre = createAsyncThunk(
    'movieSlice/getByGenre',
    async ({page, with_genres}, thunkAPI) => {
        try {
            const {data} = await movieService.getByGenre(page, with_genres);
            // console.log(current(search));
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getVideo = createAsyncThunk(
    'movieSlice/getVideo',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getVideo(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {page, total_pages, results} = action.payload;
                state.movies = results
                state.prev = page
                state.next = total_pages
            })
            .addCase(getTop.fulfilled, (state, action) => {
                const {page, total_pages, results} = action.payload;
                state.movies = results
                state.prev = page
                state.next = total_pages
            })
            .addCase(getPopular.fulfilled, (state, action) => {
                const {page, total_pages, results} = action.payload;
                state.movies = results
                state.prev = page
                state.next = total_pages
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedMovie = action.payload
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                const {page, total_pages, results} = action.payload;
                state.movies = results
                state.prev = page
                state.next = total_pages
            })
            .addCase(getByGenre.fulfilled, (state, action) => {
                const {page, total_pages, results} = action.payload;
                state.movies = results
                state.prev = page
                state.next = total_pages
            })
            .addCase(getVideo.fulfilled, (state, action) => {
                const {results} = action.payload;
                if (results.length ===0){ state.video =null}else{
                state.video = results}
            })
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getMovies,
    getById,
    searchMovies,
    getByGenre,
    getVideo,
    getTop,
    getPopular
}

export {
    movieReducer,
    movieActions
}