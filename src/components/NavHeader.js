import React from 'react'
import { Container, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import logo from '../logo.svg'

import { createUseStyles } from 'react-jss'
import styled from 'styled-components'

const useStyles = createUseStyles({
  navBkg: {
    backgroundColor: '#333f42',
    // backgroundColor: '#B4975A',
    textAlign: 'center',
    paddingTop: 3,
    paddingBottom: 0
  },
  navTitles: {
    color: '#B4975A',
    '&:hover': {
      color: '#afd'
    },
  }
})
 
const HeaderNav = styled(Nav.Link)`
  color: #B4975A !important;
  &.active {
    color: #f00 !important;
  }
  &.hover {
    color: #afd !important;
  }
`
  
export const NavHeader = () => {
  const classes = useStyles()
  return (
    <Navbar className={classes.navBkg} collapseOnSelect expand="lg" variant="dark" sticky="top">
    <Navbar.Brand href="/">
      <img
        alt="logo"
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
      <Nav>
        <HeaderNav href="#home" >Home</HeaderNav>
        <HeaderNav href="#about_me">About</HeaderNav>
        <HeaderNav href="#my_work">Resume</HeaderNav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
  
}

// const classes = useStyles()
//   return (
//     <Navbar className={classes.navBkg} variant="dark" sticky="top">
//       <Navbar.Toggle />
//       <Navbar.Collapse className="justify-content-center">
//       <Navbar.Brand href="/home">
//       <img
//         alt="logo"
//         src={logo}
//         width="40"
//         height="40"
//         className="d-inline-block align-top"
//       />
//       </Navbar.Brand>
//         <Nav defaultActiveKey="/home">
//           <Nav.Item >
//             <Nav.Link eventKey="/home"  className={classes.navTitles} href="/home">Home</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="#about_me" className={classes.navTitles} href="#about_me">About</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="/resume">Resume</Nav.Link>
//           </Nav.Item>
//         </Nav>
//         </Navbar.Collapse>
//     </Navbar>
//   )