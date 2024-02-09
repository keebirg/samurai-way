import React from 'react';
import {UserList} from "./userList/UserList";
import {DialogWindow} from "./dialogWindow/DialogWindow";
import styled from "styled-components";
import {usersType} from "../../../../redux/state";

type massagePropsType={
    users:usersType
}

export const Massage = (props:massagePropsType) => {
    return (
        <StyledMassage>
            <UserList users={props.users}/>
            <DialogWindow/>
        </StyledMassage>
    );
};

const StyledMassage = styled.div`
  display: flex;
  gap: 30px;
`