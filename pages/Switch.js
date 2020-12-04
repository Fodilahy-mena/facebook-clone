import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { Context } from '../Context';
const SelectStStyle = styled.select`
background: #C4C4C4;
border-radius: 10px;
border: none;
padding: 12px 40px;
max-width: 100%;
outline: none;
`;

function SwitchAccount() {
    const { state, dispatch }= useContext(Context);
    const [switchAccount, setSwitchAccount] = useState('')
    const {users} = state;
    function handleSwitch(e) {
        e.preventDefault();
        dispatch({type: 'SWITCHT_ACCOUNT', switchAccount: switchAccount})
    }
    return (
        <div>
            <form onSubmit={handleSwitch}>
                <label>Switch account:</label><br/>
                <SelectStStyle name="switchAccount" value={switchAccount} onChange={(e) => setSwitchAccount(e.target.value)}>
                    {users.map(user => (
                        <option value={user.userId} key={user.userId}>{user.userName}</option>
                    ))}
                </SelectStStyle><p/>
                <button style={{cursor: "pointer",background: "C4C4C4",borderRadius: "10px", border: "none",outline: "none", padding: "12px 16px"}}>Save</button>
            </form>
            
        </div>
    )
}

export default SwitchAccount
