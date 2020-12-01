import React, {useContext} from 'react';
import Styled from 'styled-components';
import { Context } from '../Context';

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
    const postId = posts.map(pst => pst.userId);
    const findUsersId = users.find(usr => usr.userId == postId);

    console.log(findUsersId);
    const { addLikes }= useContext(Context);
    const feedBackElement = posts.map(post => {
        
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
                                            <ProfileImgStyle src={findUsersId.profilePic}/>
                                            <SpanStyle>{findUsersId.userName}</SpanStyle>
                                        </CommenterStyle>
                                        <span>{comment.date}</span>
                                    </CommenterStyle>
                                    <p>{comment.text}</p>
                                </li>
                            ))}
                            
                        </UlStyle>
                    </nav>
                    <form>
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
