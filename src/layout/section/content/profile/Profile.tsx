import React, {
    ChangeEvent,
} from 'react';
import styled from "styled-components";
import {Post} from "./post/Post";
import {
    actionType,
    postsType
} from "../../../../redux/state";
import {
    addPostAC,
    changeProfileTextareaAC
} from "../../../../redux/profileReducer";

type profilePropsType={
    posts:postsType
    profileTextarea:string
    dispatch:(action:actionType)=>void;
}

export const Profile = (props:profilePropsType) => {
    return (
        <FlexWrapper>
            <Form>
                <Text value={props.profileTextarea}
                      onChange={(event:ChangeEvent<HTMLTextAreaElement>)=> {
                          props.dispatch(changeProfileTextareaAC(event.currentTarget.value))
                      }}>
                </Text>
                <Button onClick={()=>props.dispatch(addPostAC())} >добавить</Button>
            </Form>
            {props.posts.map(post=><Post key={post.id} text={post.text}/>)}
        </FlexWrapper>
    );
};


const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Text = styled.textarea`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  min-height: 50px;

  font-size: 16px;
  padding: 15px;
  resize: none;


`

const Button = styled.button`
  max-width: 150px;
  min-height: 30px;
  background-color: white;
  border-radius: 8px;
  align-self: flex-end;

  padding: 12px 28px;
  font-size: 16px;

  border-width: 1px;

  -webkit-transition-duration: 0.1s; /* Safari */
  transition-duration: 0.1s;
  
  cursor: pointer;

  &:hover {
    background-color: #447bba;
    color: white;
  }
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`