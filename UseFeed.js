import {useReducer} from 'react';
import Posts from './posts.json';
import userData from './userData.json';

function UseFeed() {
    let [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
          case 'POSTS': {
            return { ...state, posts: action.posts }
          }
          case 'USERS': {
            return { ...state, users: state.users }
          }
          case 'COMMENTS': {
            return { ...state, comments: action.comments }
          }
          case 'ADD_NEW_COMMENTS': {
              const newPosts = state.posts.map(post => {
                  if(post.postId === action.postId) {
                      return {
                          ...post, 
                          comments: [...post.comments, action.comment],
                      };
                  }
                  return post;
              })
            return { ...state, posts: newPosts }
          }
          default:
            return state
        }
      }, {
        posts: [],
        users: userData,
        comments: []
      })
      
      return [state, dispatch]
      
} 

export default UseFeed