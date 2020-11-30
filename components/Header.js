import React from 'react'
import {Link} from 'react-router-dom';
import Styled from 'styled-components'
const HeaderStyle = Styled.header`
// display: flex;
// justify-content: space-between;
// margin-top: 2rem;
 h1 {
    margin: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;

    color: #000000;

 }
 a {
    position: relative;
    top: 12px;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    // margin-left: 2rem;
    // margin-right: 2rem;

    color: #000000;

}
`; 
const NavStyle = Styled.nav`
display: flex;
justify-content: space-between;
list-style: none;
padding: 0;
`;
function Header() {
    return (
        <>
            <HeaderStyle>
                <h1>OnjaBook</h1>
                <NavStyle>
                    <Link to="/">Feed</Link>
                    <Link to="/add">Add a post</Link>
                    <Link to="/userName">UserName</Link>
                </NavStyle>
            </HeaderStyle>
        </>
    )
}

export default Header
