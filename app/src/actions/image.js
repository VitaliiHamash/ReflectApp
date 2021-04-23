import {ADD_IMAGE, DELETE_IMAGE, REQUEST_POSTS} from './types';

export const addImage= (image) => (
    {
        type: ADD_IMAGE,
        data: image
    }
);


export  const  deleteImage= (key) => (
    {
        type: DELETE_IMAGE,
        key: key
    }
);


export function fetchPosts() {
    return {
      type: REQUEST_POSTS
    }
}