import React, {useState, useEffect, useReducer} from 'react';

const Context = React.createContext();

function useFeed() {
    let [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
          case 'USERNAME': {
            return { ...state, userName: state.userName }
          }
          case 'PROFILE': {
            return { ...state, profile: state.profile }
          }
          case 'POST_IMG': {
            return { ...state, postImg: state.postImg }
          }
          case 'POST_TEXT': {
            return { ...state, postText: state.postText }
          }
          case 'DATE': {
            return { ...state, date: state.date }
          }
          case 'ID': {
            return { ...state, id: state.id }
          }
          case 'LIKES': {
            return { ...state, likes: state.likes + 1}
          }
          case 'UNLIKES': {
            return { ...state, unlikes: state.unlikes + 1}
          }
          default:
            return state
        }
      }, {
        userName:'Rakoto be',
        profile: 'https://qph.fs.quoracdn.net/main-qimg-a8cafcc4acb60054c65bd209e7f5cc79.webp',
        postImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Rakoto_Frah_portrait_-_Flute_Master_of_Madagascar.jpg/220px-Rakoto_Frah_portrait_-_Flute_Master_of_Madagascar.jpg',
        postText: 'Philibert Rabezoza (1923 – 29 September 2001), better known by the name Rakoto Frah, was a flautist and composer of traditional music of the central highlands of Madagascar. Born in 1923 near the capital city of Antananarivo to a poor rural family, Rakoto Frah surmounted the challenges posed by his underprivileged origins to become the most acclaimed 20th century performer of the sodina flute, one of the oldest traditional instruments on the island.',
        date: Date.now(),
        id: Date.now(),
        likes: 0,
        unlikes: 0,
      })
      return [state, dispatch]
} 

function ContextProvider(props) {
  const [state, dispatch] = useFeed();
  console.log(state);
  
        
    let feed = [state];
    const addLikes = () => {
        dispatch({ type: 'LIKES' })
      }
      const addUnlikes = () => {
        dispatch({ type: 'UNLIKES' })
      }
    
      useEffect(() => {
        dispatch({ type: "USERNAME"})
        dispatch({ type: "PROFILE"})
        dispatch({ type: "POST_IMG"})
        dispatch({ type: "POST_TEXT"})
        dispatch({ type: "DATE"})
        dispatch({ type: "ID"})
      }, []);

    return <Context.Provider value={{feed, addLikes, addUnlikes}}>
                {props.children}
            </Context.Provider>
}

export { ContextProvider, Context};