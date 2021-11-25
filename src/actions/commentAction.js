import { FETCH_COMMENTS,NEW_COMMENTS } from "./types";

export const fetchcomments = () => dispatch =>{
    console.warn('comments action')
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments =>dispatch({
        type:FETCH_COMMENTS,
        payload:comments
    }))
}