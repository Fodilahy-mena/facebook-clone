import React, {useState, useEffect, useReducer} from 'react';

import postsData from './posts.json';
import usersData from './userData.json';

const Context = React.createContext();

function ContextProvider(props) {
  let [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'SWITCHT_ACCOUNT': {
        return { ...state, currentUser: action.switchAccount}
      }
      case 'UPDATE_CURRENT_USER': {
        const newUsersArray = state.users.map(user => {
          if (user.userId == state.currentUser) {
            // update the user and return it
            return {
              ...user,
              userName: action.userName,
              profilePic: action.profilePic,
            };
          }
          return user;
        });
        return {
          ...state,
          users: newUsersArray,
        };
      }
      case 'POSTS': {
        return { ...state, posts: action.posts }
      }
      case 'ADD_NEW_POST': {
        return {
          ...state,
          posts: [...state.posts, action.newPost],
        };
      }
      case 'USERS': {
        return { ...state, users: state.users }
      }
      // case 'COMMENTS': {
      //   return { ...state, comments: action.comments }
      // }
      case 'ADD_NEW_COMMENT': {
        const newPosts = state.posts.map(post => {
          if (post.postId == action.postId) {
            return {
              ...post,
              comments: [...post.comments, action.newComment],
            };
          }
          return post;
        });
        return {
          ...state,
          posts: newPosts,
        };
      }
      case 'UNLIKE_POST': {
        const newPostsFromUnlike = state.posts.map(post => {
          if(post.postId === action.postId) {
            
            return {
               ...post, 
              likes: post.likes.filter(like => like.userId !== state.currentUser) 
              }
          };
          return post;
        })
        return {
          ...state,

          posts: newPostsFromUnlike,
        }
      }
      case 'LIKE_POST': {
        const newPosts = state.posts.map(post => {
          if(post.postId == action.postId) {
            return {
               ...post, likes: [...post.likes, action.newLike] 
              }
          };
          return post;
        })
        return {
          ...state,
          posts: newPosts
        }
      }
      case 'ADD_NEW_USER': {
        return {
          ...state,
          users: [...state.users, action.newUser],
        };
      }
      default:
        return state
    }
  }, {
    posts: [],
    users: usersData,
    comments: [],
    currentUser: "1606797074476",
  })
  
  
  let {posts, users} = state;
  console.log(posts);
  useEffect(() => {
    dispatch({ type: "POSTS", posts: postsData})
    dispatch({ type: "USERS"})
  }, []);


    

    return <Context.Provider value={{posts, users, dispatch, state}}>
                {props.children}
            </Context.Provider>
            
}

export { ContextProvider, Context};