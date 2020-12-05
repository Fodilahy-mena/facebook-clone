
import React,{useContext} from 'react';
import AllAboutPost from '../components/AllAboutPost';
import { Post } from '../components/Post';
import { Context } from '../Context';


function Feed() {
    const { state } = useContext(Context);
    const { posts, users, currentUser } = state;
    const findUsersId = users.find(user => user.userId == currentUser); 
    return (
        <div className="post new-post">
            {posts.map(post => (
                <Post key={post.postId} findUsersId={findUsersId} post={post}>
                    <AllAboutPost />
                </Post>
            ))}
        </div>
    )
}

export default Feed
