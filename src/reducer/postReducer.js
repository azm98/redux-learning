import { FETCH_POSTS,NEW_POST } from "../actions/types";

const initialState = {
    items:[]
}

export default function (state = initialState,action) {
    switch(action.type){
        case FETCH_POSTS:
            console.warn("reducer")
            return{
                ...state,
                items:action.payload
            }

        case NEW_POST:
            return{
                ...state,
                items:action.payload
            }
        default:
            return state;
    }
}