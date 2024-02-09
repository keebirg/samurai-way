import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

type userPropsType = {
    name: string
    id: number
}

export const User = (props: userPropsType) => {
    return (
        <StyledUser>
            <NavLink to={'/massage/' + props.id}>{props.name}</NavLink>
        </StyledUser>
    );
};

const StyledUser = styled.div`

  a {
    color: black;
    text-decoration: none;
  }

  a.active{
    color: red;
  }
`