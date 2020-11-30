import React, {useContext} from 'react';
import Styled from 'styled-components';
import { Context } from '../Context';

const ProfileImgStyle = Styled.img`
border-radius: 50%;
width: 50px;
`;
const PostStyle = Styled.div`
    max-width: auto;
    min-width: auto;
    margin: auto;
    margin-top: 50px;
`;
function FeedList({feed}) {
    const { addLikes, addUnlikes }= useContext(Context);
    console.log(feed)
    const feedBackElement = feed.map(element => {
        let convertedDate = new Date(element.date).toLocaleDateString()
        return (<PostStyle key={element.id}>
                    <nav>
                        <div>
                            <ProfileImgStyle src={element.profile}/>
                            <h3>{element.userName}</h3>
                        </div>
                        <h3>{convertedDate}</h3>
                    </nav>
                    <article>
                        <p>{element.postText}</p>
                        <img src={element.postImg}/>
                        <div>
                            <button onClick={addLikes}>{element.likes}Like Btn</button>
                            <button onClick={addUnlikes}>{element.unlikes}Nb likes</button>
                        </div>
                    </article>
                    <p>iuuiuiu0u[p9[</p>
                </PostStyle>)
        
    })
    return (
        <>
           {feedBackElement} 
        </>
    )
}

export default FeedList
