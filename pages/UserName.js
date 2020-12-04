import React,{useContext, useState, useEffect} from 'react';
import styled from 'styled-components'
import { Context } from '../Context';
const InputStyle = styled.input`
background: #C4C4C4;
border-radius: 10px;
border: none;
padding: 12px 40px;
max-width: 100%;
outline: none;
`;
const InputContainerStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 10px;
margin-bottom: 10px;
`;
function UserName() {
    const { state, dispatch }= useContext(Context);
    const { users, currentUser } = state;
	const [userName, setUserName] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const [switchAccount, setSwitchAccount] = useState('')
    
	console.log("ctruu",currentUser)
    const currentUserObj = users.find(user => user.userId === currentUser) || {
		userName: '',
		profilePic: '',
    };
    
    useEffect(() => {
		setUserName(currentUserObj.userName);
		setProfilePic(currentUserObj.profilePic);
    }, [users]);
    
    function handleNewOptions(e) {
		e.preventDefault();
		dispatch({ type: 'UPDATE_CURRENT_USER', userName, profilePic });
		// dispatch({type: 'SWITCHT_ACCOUNT', switchAccount: switchAccount})
	}
	
    return (
        <div>
            <h2>Options: </h2>
            <form onSubmit={handleNewOptions}>
				{/* <label>Switch account:</label><br/>
				<select name="switchAccount" value={switchAccount} onChange={(e) => setSwitchAccount(e.target.value)}>
					{users.map(user => (
						<option value={user.userId} key={user.userId}>{user.userName}</option>
					))}
				</select><br/> */}
                <InputContainerStyle>
					<label>Username</label>
					<InputStyle
						type="text"
						name="userName"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						
					/>
				</InputContainerStyle>
				<InputContainerStyle>
					<label>Profile picture</label>
					<InputStyle
						type="url"
						name="profilePic"
						value={profilePic}
						onChange={(e) => setProfilePic(e.target.value)}
					/>
				</InputContainerStyle>
                
				<button style={{cursor: "pointer",background: "C4C4C4",borderRadius: "10px", border: "none",outline: "none", padding: "12px 16px"}} type="submit">Save</button>
            </form>
        </div>
    )
}

export default UserName
