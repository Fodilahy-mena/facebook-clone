import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export default function Feed() {
	const { state, dispatch } = useContext(GlobalContext);
	const { posts, loading } = state;
	return (
		<div>
			<h2>Feed</h2>
			{loading && <p>Loading...</p>}
			{!loading && posts && (
				<ul>
					{posts.map(post => (
						<li key={post.postId}>{post.postTextContent}</li>
					))}
				</ul>
			)}
		</div>
	);
}