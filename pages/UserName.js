import React,{useContext, useState, useEffect} from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../Context';
import AddNewProfile from './AddNewProfile';
import SwitchAccount from './Switch';

const InputStyle = styled.input`
background: #C4C4C4;
border-radius: 10px;
border: none;
padding: 12px 40px;
max-width: 100%;
outline: none;
`;
const InputContainerStyle = styled.div`

gap: 10px;
margin-bottom: 10px;
`;
function UserName() {
    const { state, dispatch }= useContext(Context);
    const { users, currentUser } = state;
	const [userName, setUserName] = useState('');
	const [profilePic, setProfilePic] = useState('');

    const currentUserObj = users.find(user => user.userId == currentUser) || {
		userName: '',
		profilePic: '',
    };
    
    useEffect(() => {
		setUserName(currentUserObj.userName);
		setProfilePic(currentUserObj.profilePic);
    }, []);
    
    function handleNewOptions(e) {
		e.preventDefault();
		dispatch({ type: 'UPDATE_CURRENT_USER', userName, profilePic });
	}
	
    return (
        <div className="post">
			<nav>
				<Link to="/userName">Account options</Link>
				<Link to="/userName/switch">Switch account</Link>
				<Link to="/userName/add">Add new profile</Link>
			</nav>
			
			<Switch>
				<Route exact path="/userName">
					<h2>Options: </h2>
					<form onSubmit={handleNewOptions}>
					<InputContainerStyle>
						<label>Username</label><br/>
						<InputStyle
							type="text"
							name="userName"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							
						/>
					</InputContainerStyle>
					<InputContainerStyle>
						<label>Profile picture</label><br/>
						<InputStyle
							type="url"
							name="profilePic"
							value={profilePic}
							onChange={(e) => setProfilePic(e.target.value)}
						/>
					</InputContainerStyle>
					
					<button style={{color:"blue",cursor: "pointer",background: "C4C4C4",borderRadius: "10px", border: "none",outline: "none", padding: "12px 16px"}} type="submit">Save</button>
				</form>
			</Route>
			<Route path="/userName/switch">
				<SwitchAccount />
			</Route>
			<Route path="/userName/add">
				<AddNewProfile />
			</Route>
		</Switch>
            
    </div>
    )
}

export default UserName
