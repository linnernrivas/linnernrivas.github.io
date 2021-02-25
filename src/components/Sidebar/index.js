import React from 'react'
import { 
    SideBarContainer,
    Icon, 
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink
    // SideButtonWrap,
    // SideBarRoute
} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}> 
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="portfolio" onClick={toggle}>Portfolio</SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>Services</SideBarLink>
                    <SideBarLink to="contact" onClick={toggle}>Contact Us</SideBarLink>
                </SideBarMenu>
                {/* <SideButtonWrap>
                    <SideBarRoute to="/signin" >Sign In</SideBarRoute>
                </SideButtonWrap> */}
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar
