import React, {useContext, useState} from 'react'
import { Context } from '../Context';
function Add() {
    const { posts, users,dispatch }= useContext(Context);
    const [legend, setLegend] = useState('');
    const [postPhoto, setPostPhoto] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let now = Date.now();
        let date = new Date(Date.now()).toLocaleDateString();
        const newPost = {
            postId: now,
            date: date,
            postPhoto: postPhoto,
            legend: legend,
            userId: 1606797074476,
            likes: [
                {
                    userId: 1606797074476,
                    likeId: 1
                },
                {
                    userId: 1606797074476,
                    likeId: 2
                }
            ],
            comments: [
                // commentId: 1,
                // text: "Ok",
                // date: date,
                // userId: 1606797074476
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
                <h2>New post:</h2>
                <textarea type="text" name="legend" value={legend} onChange={(e) => setLegend(e.target.value)} placeholder="Say what’s on your mind..." rows="5" cols="30"/><br/>
                <label>Picture url : </label>
                <input type="url" name="postPhoto" value={postPhoto} onChange={(e) => setPostPhoto(e.target.value)} placeholder="Title" required/> 
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default Add
