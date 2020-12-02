import React, {useContext, useEffect, useState} from 'react';
import Styled from 'styled-components';
import { Context } from '../Context';
import UseFeed from '../UseFeed';

const ProfileImgStyle = Styled.img`
border-radius: 50%;
width: 50px;
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
justify-content: space-between;
`;
const SpanStyle = Styled.span`
position: relative;
margin: 16px
`;

function FeedList({posts, users}) {
    const [state, dispatch] = UseFeed();
    
  function Submit(e, id) {
    let date = new Date(Date.now()).toLocaleDateString();
    console.log(date);
    e.preventDefault();
    
    const {text} = e.target;
    posts.map(post => {

        if(post.postId === id) {
            console.log(post.postId)
            console.log(post.comments)
        return {
          ...post,
          comments: post.comments.push({
              commentId: Date.now(),
              date: date,
              text: text.value,
              userId: 1606797074476
            })
          
        }
        
        }
        return posts;
      })
      dispatch({ type: "POSTS", posts: posts })
    
    e.target.reset();
  }

    const { addLikes }= useContext(Context);

    const feedBackElement = posts.map(post => {
    const findUsersId = users.find(usr => usr.userId === post.userId);
    
        return (<PostStyle key={post.postId}>
                    <CommenterStyle>
                        <div>
                            <ProfileImgStyle src={findUsersId.profilePic}/>
                            <SpanStyle>{findUsersId.userName}</SpanStyle>
                        </div>
                        <span>{post.date}</span>
                    </CommenterStyle>
                    <article>
                        <p>{post.legend}</p>
                        <ImgPost src={post.postPhoto}/>
                        <div>
                            <button onClick={addLikes}>Like Btn</button>
                            <span></span>
                        </div>
                    </article>
                    <nav>
                        <UlStyle>
                            {post.comments.map(comment => (
                                
                                <li key={comment.commentId}>
                                    <CommenterStyle>
                                        <CommenterStyle>
                                            <ProfileImgStyle src={users.find(usr => usr.userId === comment.userId).profilePic}/>
                                            <SpanStyle>{users.find(usr => usr.userId === comment.userId).userName}</SpanStyle>
                                        </CommenterStyle>
                                        <span>{comment.date}</span>
                                    </CommenterStyle>
                                    <p>{comment.text}</p>
                                </li>
                            ))}
                            
                        </UlStyle>
                    </nav>
                    <form onSubmit={(e) => Submit(e, post.postId)}>
                        <input type="text" name="text" placeholder="Add a comment..."/>
                        <button type="submit">Post</button>
                    </form>
                </PostStyle>)
    })
    return (
        <>
           {feedBackElement} 
        </>
    )
}


export default FeedList
