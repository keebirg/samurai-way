import {
    profileActionType,
    profileReducer
} from "./profileReducer";

export type usersType = Array<{
    name: string
    id: number
}>


export type postsType = Array<{
    text: string
    id: number
}>


export type stateType = {
    profile:{
        posts: postsType
        profileTextarea: string
    }
    massage: {
        users: usersType
    }
}


export type actionType=profileActionType

export let store = {
    _state: {
        profile:{posts: [
                {text: 'text', id: 1},
                {text: 'text', id: 2},
                {text: 'text', id: 3},
                {text: 'text', id: 4},
            ],
            profileTextarea: '',},
        massage:{
            users: [
                {name: 'Sany', id: 1},
                {name: 'Koly', id: 2},
                {name: 'Pety', id: 3},
            ],},

    },

    getState(){
        return this._state;
    },

    setState(newState:stateType){
        this._state=newState;
        this._callSubscriber(this._state)
    },

    _callSubscriber(state: stateType) {
    },

    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action:actionType){
        this.setState(profileReducer(this._state, action));
    },

}


