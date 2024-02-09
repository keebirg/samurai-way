import React from 'react';
import styled from "styled-components";
import {usersType} from "../../../../../redux/state";
import {User} from "./User";


type userListPropsType={
    users:usersType
}

export const UserList = (props:userListPropsType) => {
    return (
        <StyledUserList>
            {props.users.map((el)=><User key={el.id} name={el.name} id={el.id}/>)}
        </StyledUserList>
    );
};

const StyledUserList = styled.div`
  flex-grow: 1;
  
  background-color: white;
  border-radius: 8px;
  min-height: 50px;
  
  padding: 20px;
`