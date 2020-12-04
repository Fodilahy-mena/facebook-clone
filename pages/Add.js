import React, {useContext, useState} from 'react'
import styled from 'styled-components';
const InputStyle = styled.input`
background: #C4C4C4;
border-radius: 10px;
border: none;
padding: 12px 27px;
max-width: 100%;
outline: none;
`;
const TextareaStyle = styled.textarea`
background: #C4C4C4;
border-radius: 10px;
border: none;
padding: 12px 40px;
outline: none;
`;
import { Context } from '../Context';
function Add() {
    const { posts, state, dispatch }= useContext(Context);
    const [legend, setLegend] = useState('');
    const [postPhoto, setPostPhoto] = useState('');
    
    const { users, currentUser } = state;
    
    const currentUserObj = users.find(user => user.userId === currentUser)

    const handleSubmit = (e) => {
        e.preventDefault();
        let now = Date.now();
        let date = new Date(Date.now()).toLocaleDateString();
        const newPost = {
            postId: now,
            date: date,
            postPhoto: postPhoto,
            legend: legend,
            userId: currentUserObj.userId,
            likes: [
                {
                    userId: currentUserObj.userId,
                    likeId: 1
                },
                {
                    userId: currentUserObj.userId,
                    likeId: 2
                }
            ],
            comments: [
                
            ]
        }
        dispatch({ type: "POSTS", posts: [...posts, newPost]})
        console.log(posts)
        console.log(newPost)
        setLegend('');
        setPostPhoto('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add a new post:</h2>
                <label>Post content: </label><br/>
                <TextareaStyle type="text" name="legend" value={legend} onChange={(e) => setLegend(e.target.value)} placeholder="Say what’s on your mind..." rows="5" cols="30"/><br/>
                <label>Picture url : </label>
                <InputStyle type="url" name="postPhoto" value={postPhoto} onChange={(e) => setPostPhoto(e.target.value)} placeholder="Paste a URL here" required/> 
                <br/>
                <button style={{cursor: "pointer", background: "C4C4C4",borderRadius: "10px", outline: "none", border: "none", padding: "12px 16px"}} type="submit">Post</button>
            </form>
        </div>
    )
}

export default Add
