import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Styled from 'styled-components'
const HeaderStyle = Styled.header`
background-color: #3F51B5;
 h1 {
    margin: 0;
    padding-top: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    color: #ffffff;

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
    color: #ffffff;
`;
const BigPhotoProfile = styled.img`
border-radius: 50%;
width: 150px;
height: 150px;
position: relative;
top: 1rem;
border: 7px solid lightgrey;
`;
import { Context } from '../Context';

function Header() {
    const { state}= useContext(Context);
    const { users, currentUser } = state;
    
    const currentUserObj = users.find(user => user.userId == currentUser)
    return (
        <>
            <HeaderStyle>
                <div>
                    <h1>OnjaBook</h1>
                    <NavStyles>
                        <ul>
                        <li><Link to="/">Feed</Link></li>
                        <li><Link to="/addPost">Add a post</Link></li>
                        <li><Link to="/userName">
                            <ProfileLinkStyles>

                                <span>{currentUserObj.userName}</span>
                                <img src={currentUserObj.profilePic}/>
                            </ProfileLinkStyles>
                        </Link></li>
                        </ul>
                    </NavStyles>
                </div>
                
            </HeaderStyle>
            <div className="container">
                <div className="expanded-profile">
                    <BigPhotoProfile src={currentUserObj.profilePic}/>
                    <h2>{currentUserObj.userName}</h2>
                </div>
            </div>
        </>
    )
}

export default Header
