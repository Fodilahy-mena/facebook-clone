import React, {useState, useEffect, useReducer} from 'react';

import postsData from './posts.json';
import usersData from './userData.json';

const Context = React.createContext();

function ContextProvider(props) {
  let [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'UPDATE_CURRENT_USER': {
        const newUsersArray = state.users.map(user => {
          if (user.userId === state.currentUser) {
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
    users: usersData,
    comments: [],
    currentUser: 1606797074476,
  })
  
  
  let {posts, users} = state;
  console.log(posts);
  useEffect(() => {
    dispatch({ type: "POSTS", posts: postsData})
    dispatch({ type: "USERS"})
  }, []);

    const addLikes = (idPost) => {
    //     const updatePost = posts.map(post => {
    //       // console.log(post)
    //       let userArr = post.user.map(usr => usr);
    //       let likeArr = post.like.map(lk => lk);

    //       userArr.map(usr => {
    //         if(usr.id) {
    //           likeArr.map(lk => {
    //           if(lk.id) {
    //             console.log(lk.likes)
    //             return {
    //             ...lk,
    //             likes: lk.likes + 1,
    //             };
    //           }
    //           return lk;
    //         })
    //       }
    //       return usr;
          
    //       })
    //       return post;
          
    //     });
    //     setPosts(updatePost);
    //     // console.log(updatePost)
      }
    

    return <Context.Provider value={{posts, addLikes, users, dispatch, state}}>
                {props.children}
            </Context.Provider>
            
}

export { ContextProvider, Context};