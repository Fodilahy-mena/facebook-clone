import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddPost from './AddPost';
import Feed from './Feed';
import ProfileOptions from './ProfileOptions';
import Menu from './Menu';

export default function App() {
	return (
		<div>
			<Menu />
			<Switch>
				<Route path="/" exact>
					<Feed />
				</Route>
				<Route path="/add">
					<AddPost />
				</Route>
				<Route path="/options">
					<ProfileOptions />
				</Route>
			</Switch>
		</div>
	);
}