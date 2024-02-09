import {stateType} from "./state";

type changeProfileTextareaAT = {
    type: 'CHANGE-TEXTAREA'
    newText: string
}

type addPostAT = {
    type: 'ADD-POST'
}

export type profileActionType = changeProfileTextareaAT | addPostAT

export const profileReducer = (state: stateType, action: profileActionType) => {
    switch (action.type) {
        case 'CHANGE-TEXTAREA': {
            let newState = {...state, profile:{...state.profile} }
            newState.profile.profileTextarea = action.newText;

            return newState;
        }

        case "ADD-POST": {
            let newState = {
                ...state,
                profile: {
                    ...state.profile,
                    posts: state.profile.posts.map((post) => {
                        return ({...post})
                    })
                }
            }
            let newPost = {text: newState.profile.profileTextarea, id: newState.profile.posts.length + 1};
            newState.profile.posts.push(newPost);
            newState.profile.profileTextarea = '';

            return newState;
        }

        default:
            return state;
    }
};

export const changeProfileTextareaAC = (newText: string): changeProfileTextareaAT => {
    return {type: "CHANGE-TEXTAREA", newText: newText};
}
export const addPostAC = (): addPostAT => {
    return {type: "ADD-POST"};
}