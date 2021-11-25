import {FETCH_COMMENTS,NEW_COMMENTS} from '../actions/types';

const initialState = {
    items:[],
}

export default function (state = initialState,action) {
    switch(action.type) {
        case FETCH_COMMENTS:
            console.warn("fetch commments");
            return{
                ...state,
                items:action.payload
            }
            default:
                return state;
    }
}