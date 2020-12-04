import React, {useContext} from 'react'
import { Context } from '../Context';
import styled from 'styled-components';

const LikeContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;
button {
    background: #2196F3;
    border-radius: 10px;
    border: none;
    padding: 12px;
    color: #fffffffc;
    outline: none;
    cursor: pointer;
}
`;
function Likes({post}) {
    const {state, dispatch} = useContext(Context)
    const {currentUser} = state;


    const handleNewLike = () => {
        const newLike = {
            likeId: Date.now(),
            userId: currentUser,
        }
        dispatch({type: "LIKE_POST", newLike, postId: post.postId})
    }
    function chackeLiked() {
        return post.likes.some(like => like.userId === currentUser);
    }
    function handleUnlike() {
        dispatch({type: 'UNLIKE_POST', postId: post.postId})
    }
    return (
        <LikeContainer>
            {chackeLiked() ? (<button onClick={handleUnlike}>Unlike Btn</button>)
            : (<button onClick={handleNewLike}>Like Btn</button>)}
            
            <span>{post.likes.length}</span>
        </LikeContainer>
    )
}

export default Likes
