import React from 'react';
import './index.css';
import {
    stateType,
    store
} from "./redux/state";
import ReactDOM from "react-dom";
import {GlobalStyle} from "./style/Global.styled";
import {App} from "./App";



export const render = (state:stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <GlobalStyle/>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

render(store.getState());

store.subscribe(render);