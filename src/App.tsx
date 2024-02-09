import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import styled from "styled-components";
import {Section} from "./layout/section/Section";
import {BrowserRouter} from "react-router-dom";
import {
    actionType,
    stateType,
} from "./redux/state";

type appPropsType={
    state:stateType
    dispatch:(action:actionType)=>void;
}

export function App(props:appPropsType) {
    return (
       <BrowserRouter>
           <StyledApp>
               <Header/>
               <Section state={props.state} dispatch={props.dispatch}/>
           </StyledApp>
       </BrowserRouter>
    );
}

const StyledApp = styled.div`
  
`