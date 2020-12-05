import React,{useContext, useState} from 'react'
import { Context } from '../Context';
import styled from 'styled-components';

const FormStyle = styled.form`
	display: grid;
	gap: 10px;
	grid-template-columns: 200px;
	textarea {
		height: 100px;
	}
`;

const InputStyle = styled.input`
background: #C4C4C4;
border-radius: 10px;
border: none;
padding: 12px 27px;
max-width: 100%;
outline: none;
`;

function AddNewProfile() {
    const [username, setUsername] = useState('');
	const [profilePic, setProfilePic] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizPCS-qd6-5Q05oGtEMBMBfgGsk9ggLkKLQ&usqp=CAU');
    const { state, dispatch } = useContext(Context);
    const {users} = state;
    console.log(users)

	function createNewUser(e) {
		e.preventDefault();
		const newUser = {
			userId: Date.now().toString(),
			userName: username,
			profilePic: profilePic,
		};
		dispatch({ type: 'ADD_NEW_USER', newUser });
		
	}

	return (
		<FormStyle onSubmit={createNewUser}>
			<label>Username : </label>
			<InputStyle
				type="text"
				value={username}
				onChange={e => setUsername(e.target.value)}
				placeholder="Enter the username of the new user"
				required
			/>
			<label>Profile Pic : </label>
			<InputStyle
				type="text"
				value={profilePic}
				onChange={e => setProfilePic(e.target.value)}
				placeholder="Paste an URL pic of the new user"
			/>
			<button style={{color:"blue" ,cursor: "pointer", background: "C4C4C4",borderRadius: "10px", outline: "none", border: "none", padding: "12px 16px", width: "fit-content"}}>Create</button>
		</FormStyle>
	);
}

export default AddNewProfile
