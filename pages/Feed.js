
import React, {useContext} from 'react';
import FeedList from '../components/FeedList';
import { Context } from '../Context';

function Feed() {
    const { feed }= useContext(Context);
    console.log("feedback", feed);
    return (
        <div>
            <FeedList feed={feed}/>
        </div>
    )
}

export default Feed
