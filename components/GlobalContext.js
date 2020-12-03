import React, { createContext, useReducer, useEffect } from 'react';
import postsData from '../postsData.json';
import usersData from '../usersData.json';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case 'LOAD_JSON_DATA': {
					return {
						...state,
						loading: false,
						posts: postsData,
						users: usersData,
					};
				}
				case 'ADD_NEW_POST': {
					return {
						...state,
						posts: [...state.posts, action.newPost],
					};
				}
				case 'UPDATE_CURRENT_USER': {
					const newUsersArray = state.users.map(user => {
						if (user.userId === state.currentUser) {
							// update the user and return it
							return {
								...user,
								userName: action.userName,
								profilePictureUrl: action.profilePictureUrl,
							};
						}
						return user;
					});
					return {
						...state,
						users: newUsersArray,
					};
				}
				default: {
					console.error('No actions defined for', action.type);
					break;
				}
			}
			return state;
		},
		{
			loading: true,
			posts: [],
			users: [],
			currentUser: '1',
		}
	);

	useEffect(() => {
		setTimeout(() => {
			'';
			dispatch({ type: 'LOAD_JSON_DATA' });
		}, 1000);
	}, []);

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalContextProvider };