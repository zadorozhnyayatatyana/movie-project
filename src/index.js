import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupStore} from "./redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import {App} from './App';
import ThemeContextWrapper from "./contexts/themeContext/themeContextWrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore();

root.render(
    <ThemeContextWrapper>
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    </ThemeContextWrapper>
)