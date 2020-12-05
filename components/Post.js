import React, { createContext } from 'react';

const PostContext = createContext();

function Post({findUsersId, post, children }) {

	return (
		<PostContext.Provider value={{findUsersId, post }}>
			{children}
		</PostContext.Provider>
	);
}

export { PostContext, Post };

