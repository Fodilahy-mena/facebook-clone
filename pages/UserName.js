import React,{useContext, useState} from 'react';
import { Context } from '../Context';

function UserName() {
    const {users}= useContext(Context);
    const [userName, setUserName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    
    let firstUser = users[0];
    function handleClick(e) {
        const findUsersId = users.find(usr => usr.userId === firstUser.userId);
        console.log(findUsersId)

        e.preventDefault();
        
    }
    return (
        <div>
            <h2>Options: </h2>
            <form>
                <label>Username</label>
                <input type="text" name="userName" placeholder="Type your username here"/><br/>
                <label>Profile picture</label>
                <input type="text" name="profilePic" placeholder="Paste a URL here"/><br/>
                <button onClick={handleClick}>Save</button>
            </form>
        </div>
    )
}

export default UserName
