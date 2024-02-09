import React from 'react';
import {NavBar} from "./navBar/NavBar";
import {Profile} from "./content/profile/Profile";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {Massage} from "./content/massage/Massage";
import {Route} from "react-router-dom";
import {
    actionType,
    stateType,
} from "../../redux/state";

type sectionPropsType = {
    state:stateType
    dispatch:(action:actionType)=>void;
}

export const Section = (props: sectionPropsType) => {
    return (
        <StyledSection>
            <Container>
                <FlexWrapper>

                    <StyledNav>
                        <NavBar/>
                    </StyledNav>

                    <StyledContent>
                        <Route path={'/profile'} render={() => <Profile
                            posts={props.state.profile.posts}
                            profileTextarea={props.state.profile.profileTextarea}
                            dispatch={props.dispatch}/>}/>
                        <Route path={'/massage'} render={() => <Massage users={props.state.massage.users}/>}/>
                    </StyledContent>

                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

const StyledSection = styled.section`
  padding-top: 20px;
  background-color: rgb(237, 238, 240);
`

const StyledContent = styled.div`
  max-width: 1000px;
  width: 100%;
  //flex-grow: 10;
`

const StyledNav = styled.nav`
  height: 100vh;
  //flex-grow: 2;
`


const FlexWrapper = styled.div`
  display: flex;
  gap: 40px;
  
`