import {ADD_IMAGE, DELETE_IMAGE, FETCH_POSTS} from '../actions/types';

const initialState = {
    imageList:[],
    fetchedPosts: []
}

const imageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_IMAGE:
        return {
            ...state,
        imageList: state.imageList.concat({
            key: Math.random(),
            name: action.data
           })
        };
        case DELETE_IMAGE:
            return {
                ...state,
                imageList: state.imageList.filter((item) =>
                item.key !== action.key)
            };
        case FETCH_POSTS:
            return { ...state, fetchedPosts: action.payload }
        
        default:
            return state;
    }
}

export default imageReducer;