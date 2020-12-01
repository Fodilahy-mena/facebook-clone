
import React, {useContext} from 'react';
import FeedList from '../components/FeedList';
import { Context } from '../Context';

function Feed() {
    const { posts, users }= useContext(Context);
    return (
        <div>
            <FeedList posts={posts} users={users}/>
        </div>
    )
}

export default Feed
