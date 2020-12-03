import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.nav`
	ul  {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
	}
`;

const ProfileLinkStyles = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 15px;
	align-items: center;
	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
`;

export default function Menu() {
	const { state } = useContext(GlobalContext);
	const { users, currentUser } = state;
	const currentUserObj = users.find(user => user.userId === currentUser);
	return (
		<div>
			<h1>Onjabook</h1>
			<NavStyles>
				<ul>
					<li>
						<Link to="/">Feed</Link>
					</li>
					<li>
						<Link to="/add">Add a post</Link>
					</li>
					<li>
						{!currentUserObj && 'Loading...'}
						{currentUserObj && (
							<Link to="/options">
								<ProfileLinkStyles>
									<span>{currentUserObj.userName}</span>
									<img
										src={currentUserObj.profilePictureUrl}
										alt={`Profile pic of ${currentUserObj.userName}`}
									/>
								</ProfileLinkStyles>
							</Link>
						)}
					</li>
				</ul>
			</NavStyles>
		</div>
	);
}
