import React from 'react';
import styled from "styled-components";
import img from '../../../../../assets/images/Owls.jpg'

type postPropsType={
    text:string
}

export const Post = (props:postPropsType) => {
    return (
        <StyledPost>
            <img src={img}/>
            <div>{props.text}</div>
        </StyledPost>
    );
};

const StyledPost = styled.div`
  background-color: white;
  border-radius: 8px;
  min-height: 50px;
  
  padding: 20px;
  display: flex;
  align-items: center;
  gap:20px;
  
  img{
    width: 70px;
    height: 70px;
    border-radius: 50px;
  }
`