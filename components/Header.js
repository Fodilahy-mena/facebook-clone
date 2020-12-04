import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import Styled from 'styled-components'
const HeaderStyle = Styled.header`
 h1 {
    // margin: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;

    color: #0404fe;

 }
 

}
`; 
const ProfileLinkStyles = Styled.div`
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
const NavStyles = Styled.nav`
	ul  {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
    }
     a {
    position: relative;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 42px;
    color: #0404fe;
`;

import { Context } from '../Context';

function Header() {
    const { state}= useContext(Context);
    const { users, currentUser } = state;
    
    const currentUserObj = users.find(user => user.userId == currentUser)
    return (
        <>
            <HeaderStyle>
                <h1>OnjaBook</h1>
                <NavStyles>
                    <ul>
                    <li><Link to="/">Feed</Link></li>
                    <li><Link to="/add">Add a post</Link></li>
                    <li><Link to="/userName">
                        <ProfileLinkStyles>

                            <span>{currentUserObj.userName}</span>
                            <img src={currentUserObj.profilePic}/>
                        </ProfileLinkStyles>
                    </Link></li>
                    </ul>
                </NavStyles>
            </HeaderStyle>
        </>
    )
}

export default Header
