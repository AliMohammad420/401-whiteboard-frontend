export const actionTypes = {
    ADD_POST: 'ADD_POST_SUCCESS',
    ADD_POST_ERROR: 'ADD_POST_ERROR',
    DELETE_POST: 'DELETE_POST_SUCCESS',
    DELETE_POST_ERROR: 'DELETE_POST_ERROR',
    UPDATE_POST: 'UPDATE_POST_SUCCESS',
    UPDATE_POST_ERROR: 'UPDATE_POST_ERROR',
    GET_POSTS: 'GET_POSTS_SUCCESS',
    GET_POSTS_ERROR: 'GET_POSTS_ERROR',
    GET_POST: 'GET_POST_SUCCESS',
    GET_POST_ERROR: 'GET_POST_ERROR'
}

const initState = {
    posts: [],
    post: null,
    postError: null
}

const postReducer = ( state = initState, action ) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            console.log('add post success');
            return {
                ...state,
                postError: null
            }
        case actionTypes.ADD_POST_ERROR:
            console.log('add post error');
            return {
                ...state,
                postError: action.err.message
            }
        case actionTypes.DELETE_POST:
            console.log('delete post success');
            return {
                ...state,
                postError: null
            }
        case actionTypes.DELETE_POST_ERROR:
            console.log('delete post error');
            return {
                ...state,
                postError: action.err.message
            }
        case actionTypes.UPDATE_POST:
            console.log('update post success');
            return {
                ...state,
                postError: null
            }
        case actionTypes.UPDATE_POST_ERROR:
            console.log('update post error');
            return {
                ...state,
                postError: action.err.message
            }
        case actionTypes.GET_POSTS:
            console.log('get posts success');
            return {
                ...state,
                posts: action.posts,
                postError: null
            }
        case actionTypes.GET_POSTS_ERROR:
            console.log('get posts error');
            return {
                ...state,
                postError: action.err.message
            }
        case actionTypes.GET_POST:
            console.log('get post success');
            return {
                ...state,
                post: action.post,
                postError: null
            }
        case actionTypes.GET_POST_ERROR:
            console.log('get post error');
            return {
                ...state,
                postError: action.err.message
            }
        default:
            return state;
    }
}

export default postReducer