import React, {useState,useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
    // NavButton,
    // NavButtonLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]  = useState(false);
    
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
       window.addEventListener('scroll', changeNav);
    },[]);

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>
                        <NavLogo to='/'>Linner Rivas</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='portfolio'>Portfolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services'>Services</NavLinks>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinks to='signup'>Sign Up</NavLinks>
                            </NavItem>
                            <NavButton>
                                <NavButtonLink to='/signin'>Sign In</NavButtonLink>
                            </NavButton> */}
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
