import React,{useContext, useState, useEffect} from 'react';
import { Context } from '../Context';

function UserName() {
    const { state, dispatch }= useContext(Context);
    const { users, currentUser } = state;
	const [userName, setUserName] = useState('');
	const [profilePic, setProfilePic] = useState('');
    

    const currentUserObj = users.find(user => user.userId === currentUser) || {
		userName: '',
		profilePic: '',
    };
    console.log("mam",currentUserObj)
    useEffect(() => {
		setUserName(currentUserObj.userName);
		setProfilePic(currentUserObj.profilePic);
    }, [users]);
    
    function handleNewOptions(e) {
		e.preventDefault();
		dispatch({ type: 'UPDATE_CURRENT_USER', userName, profilePic });
		
	}
    return (
        <div>
            <h2>Options: </h2>
            <form onSubmit={handleNewOptions}>
                <label>Username</label>
				<input
					type="text"
					value={userName}
					onChange={e => setUserName(e.target.value)}
					
				/><br/>
                <label>Profile picture</label>
				<input
					type="url"
					value={profilePic}
					onChange={e => setProfilePic(e.target.value)}
				/>
                <br/>
				<button>Save</button>
            </form>
        </div>
    )
}

export default UserName
