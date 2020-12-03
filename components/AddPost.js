import React, {useState, useContext} from 'react';
import Styled from 'styled-components';
import { GlobalContext } from './GlobalContext';

export const FormStyle = Styled.form`
display: grid;
gap: 10px;
grid-template-columns: 200px;
textarea {
    height: 100px;
}
`;

export default function AddPost() {
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState('');
    const { state, dispatch } = useContext(GlobalContext);
    const {posts, currentUser } = state

    function handleNewPost(e) {
        e.preventDefault();
        const newPost = {
            postId: Date.now(),
            userId: currentUser,
            date: new Date(),
            postTextContent: postContent,
            imgUrl: postImage,
            likes: [],
            comments: []
        }
        console.log(newPost);
        dispatch({ type: "ADD_NEW_POST", newPost: newPost });
        // resetform();
        
    }
    console.log(posts)
	return (
		<div>
			<h2>Add a post</h2>
            <FormStyle onSubmit={handleNewPost}>
                <label>New post content: </label>
                <textarea 
                    value={postContent}
                    placeholder="Say what's on your mind..."
                    onChange={e => setPostContent(e.target.value)} 
                />
                <label>New post Picture</label>
                <input 
                    type="text" 
                    value={postImage}
                    placeholder="Paste a picture url here"
                    onChange={e => setPostImage(e.target.value)}
                />
                <button>Post</button>
            </FormStyle>
		</div>
	);
}