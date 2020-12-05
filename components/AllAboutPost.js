import React, {useContext, useEffect, useState} from 'react';
import Styled from 'styled-components';
import { Context } from '../Context';
import Likes from './Likes';
import { PostContext }  from './Post';


const ConteinerStyles= Styled.div`
display: flex;
justify-content: space-between;
`; 
const ImgPost = Styled.img`
max-width: 100%;
min-width: 100%;
height: auto;
`;
const PostStyle = Styled.div`
    max-width: auto;
    min-width: auto;
    margin: auto;
    margin-top: 50px;
`;
const UlStyle = Styled.ul`
padding: 0;
list-style: none;
`;
const CommenterStyle = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 15px;
img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
`;
const FieldsetStyle = Styled.fieldset`
max-width: fit-content;
margin: 0;
padding: 12px 16px;
background: #C4C4C4;
border-radius: 28px;
border: none;
input {
    border: none;
    background-color: transparent;
    outline: none;
    * {
        color: white;
    }
}
button {
    border: none;
    background: #2196F3;
    border-radius: 19px;
    padding: 6px 18px;
    outline: none;
    color: white;
}
`;
const ProfileStyles = Styled.div`

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 15px;
	align-items: center;
	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
`;

function AllAboutPost() {

    const [newCommentText, setNewCommentText] = useState('');
    const { post, findUsersId } = useContext(PostContext)
	const { state, dispatch } = useContext(Context);
    const { users } = state;
    
    function Submit(e) {
        e.preventDefault();
        let date = new Date(Date.now()).toLocaleDateString();
    
        const newComment = {
            commentId: Date.now(),
            date: date,
            text: newCommentText,
            userId: 1606797074476
        }
        dispatch({ type: 'ADD_NEW_COMMENT', postId: post.postId, newComment });
        setNewCommentText('');
        e.target.reset();
    }
    
    return (
        <>
           <PostStyle key={post.postId}>
                <CommenterStyle>
                    <ProfileStyles>
                        <img src={findUsersId.profilePic}/>
                        <span>{findUsersId.userName}</span>
                    </ProfileStyles>
                    <span>{post.date}</span>
                </CommenterStyle>
                <article>
                    <p>{post.legend}</p>
                    <ImgPost src={post.postPhoto}/>
                    <Likes post={post}/>
                </article>
                <nav>
                    <UlStyle>
                        {post.comments.map(comment => ( 
                            <li key={comment.commentId}>
                                <ConteinerStyles>
                                    <CommenterStyle>
                                        <img src={users.find(usr => usr.userId == comment.userId).profilePic}/>
                                        <span>{users.find(usr => usr.userId == comment.userId).userName}</span>
                                    </CommenterStyle>
                                    <span>{comment.date}</span>
                                </ConteinerStyles>
                                <p>{comment.text}</p>
                            </li>
                        ))}
                        
                    </UlStyle>
                </nav>
                <form onSubmit={Submit}>
                    <FieldsetStyle style={{maxWidth: "fit-conmtent"}}>
                        <input type="text" name="newCommentText"
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)} placeholder="Add a comment..."/>
                        <button type="submit">Post</button>
                    </FieldsetStyle>
                </form>
            </PostStyle> 
        </>
    )
}

export default AllAboutPost