import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";




export const NavBar = () => {
    return (
        <FlexWrapper>
            <NavLink2 to={'/profile'}>Profile</NavLink2>
            <NavLink2 to={'/massage'}>Massage</NavLink2>
        </FlexWrapper>
    );
};


const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const NavLink2 = styled(NavLink)`
  font-size: 20px;
  
  color: black;
  text-decoration: none;
  
  &.active {
    color: red;
  }
`

