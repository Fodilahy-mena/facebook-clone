import React, {useState, useEffect, useReducer} from 'react';
import UseFeed from './UseFeed';
import Posts from './posts.json';

const Context = React.createContext();



function ContextProvider(props) {
  const [state, dispatch] = UseFeed();
  
  let {posts, users} = state;
  console.log(posts);
  useEffect(() => {
    dispatch({ type: "POSTS", posts: Posts})
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
    

    return <Context.Provider value={{posts, addLikes, users, dispatch}}>
                {props.children}
            </Context.Provider>
            
}

export { ContextProvider, Context};