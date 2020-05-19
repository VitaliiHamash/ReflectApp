import {ADD_IMAGE, DELETE_IMAGE} from '../actions/types';

const initialState = {
    imageList:[]
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
        default:
            return state;
    }
}

export default imageReducer;
