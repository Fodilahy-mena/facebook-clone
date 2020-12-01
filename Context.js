import React, {useState, useEffect, useReducer} from 'react';
import Posts from './posts.json';
import userData from './userData.json';

const Context = React.createContext();
console.log(Posts)
function useFeed() {
    let [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
          case 'POSTS': {
            return { ...state, myPosts: state.myPosts }
          }
          default:
            return state
        }
      }, {
        myPosts: Posts
      })
      return [state, dispatch]
} 

function ContextProvider(props) {
  const [state, dispatch] = useFeed();
  // const [newComment, setNewComent] = useState([]);
  let {myPosts} = state;
  const [posts, setPosts] = useState(myPosts);
  const [users, setUsers] = useState(userData);
 

  useEffect(() => {
    dispatch({ type: "POSTS"})
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
  

    return <Context.Provider value={{posts, addLikes, users}}>
                {props.children}
            </Context.Provider>
}

export { ContextProvider, Context};