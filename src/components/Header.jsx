import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <NavLink to="/employees">Employee Management Home</NavLink>
            <NavLink to="/add-employee">Add</NavLink>
            <a href="http://www.ashishranjan.in" target="_blank">About</a>
        </HeaderContainer>
    )
}

export default Header
