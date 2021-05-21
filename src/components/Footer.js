import React from 'react'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { IoChevronUpCircleSharp } from 'react-icons/io5'
import { createUseStyles } from 'react-jss'

import styled from 'styled-components'

const useStyles = createUseStyles({
  link: {
    position: 'relative',
    backgroundColor: '#ff0000',
    'a[href^="http"]&::before': {
      content: "\f139",
      fontFamily: 'Font Awesome 5 Free',
      fontWeight: 900,
      // display: 'none',
      color: '#ff0000',
      position: 'absolute',
      top: "-50px",
      left: "50%",
      marginLeft: '-30'

    }
  },
  smoothScroll: {
    textDecoration: 'none',
    border: '0 none',
    display: 'block',
    width: '60px',
    height: '60px',
    // backgroundColor: '#fff',
    transition: 'all 0.2s ease-in-out',
    color: '#838C95',
    fontSize: '21px',
    lineHeight: '60px',
    borderRadius: '100%',
    '&:hover': {
      color: '#afd'
    },
  },
  chevContainer: {
        position: 'absolute',
        top: '-34px',
        left: '50%',
        // bottom: '100',
        zIndex: 15,
        marginLeft: '-30px',
        
      },
})
const Link = styled.a`
  color: #838C95;
  :hover {
    color: #afd;
  }
`
const Creator = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  font-size: 0.87rem;
  color: #505050;
`

const MyGithub = styled(FiGithub)`
  /* color: #fff; */
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`
const Foot = styled.footer`
  height: 20vh;
  background-color: #333f42;
  text-align: center;
  margin: 0;
  border-radius: 0;
  position: relative;
  /* ::before {
    content: "\f139";
    display: block;
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900;
    position: absolute;
    top: -50px;
    left: 50%;     
    margin-left: -30px;
    color: #535353;
    background-color: #525252; 
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-size: 3.5rem;
  }; */
  /* & ${Link}:hover + ${MyGithub} {
      color: #add;
    } */
`


const MyTwitter = styled(FiTwitter)`
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`
const MyLinkedin = styled(FiLinkedin)`
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`
const MyInsta = styled(FiInstagram)`
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const Footer = () => {
  const classes = useStyles()
  return (
    <Foot>
    <div className={classes.chevContainer}><a href="#home" className={classes.smoothScroll}><IoChevronUpCircleSharp size={50} /></a></div>
    <Link href="https://twitter.com" target="_blank"><MyTwitter size={30} /></Link>
    <Link href="https://github.com"><MyGithub size={30} /></Link>
    <Link href="https://linkedin.com"><MyLinkedin size={30} /></Link>
    <Link href="https://instagram.com"><MyInsta size={30} /></Link>
    <Creator>Created by Rodvin Danaei © 2021</Creator>
    </Foot>
  )
}


// const useStyles = createUseStyles({
//   myJumbo: {
//     backgroundColor: '#333f42',
//     textAlign: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     margin: 0,
//     // justifyContent: 'center',
//     // justifyItems: 'center',
//     // justifySelf: 'center',
//     borderRadius: 0,
//     position: 'relative',
//     // padding: 'auto'
//     // height: '100vh'
//     '&:before': {
//       content: <IoChevronUpCircleSharp size={90} />,
//       position: 'absolute'
//     }
    
//   },
//   myCont: {
//     zIndex: 1,
//     alignItems: 'center',
//     alignContent: 'center',
//     alignSelf: 'center',
//     position: 'absolute',
//   },
//   myChev: {
//     // color: '#fff',
//     // background: 'transparent',
//     // fill: '#525252',
//     // backgourndColor: '#525252',
//     '&:hover': {
//       color: '#afd',
//     },
    
//     // zIndex: 100,
//     // position: 'absolute'
//   },
//   myCol: {
//     flexDirection: 'column',
//   },
//   iconBkg: {
//     // fill: '#fff',
//     color: '#fff',
//     marginRight: 10,
//     marginLeft: 10,
//     '&:hover': {
//       color: '#afd'
//     },
//   },
//   chevRow: {
//     position: 'relative',
//     top: '-90px',
//     left: '50%',
//     // bottom: '100',
//     zIndex: 15,
//     marginLeft: '-30px'
//   },
//   smoothScroll: {
//     textDecoration: 'none',
//     border: '0 none',
//     display: 'block',
//     width: '60px',
//     height: '60px',
//     // backgroundColor: '#fff',
//     transition: 'all 0.2s ease-in-out',
//     color: '#fff',
//     fontSize: '21px',
//     lineHeight: '60px',
//     borderRadius: '100%',
//   }
// })

// export const Foot = () => {
//   const classes = useStyles()
//   return (
//     <Jumbotron className={classes.myJumbo}>
    
//     <Row >
//       <div className={classes.chevRow}>
//         <a className={classes.smoothScroll} href="#home">
//           <IoChevronUpCircle size={60} className={classes.myChev} />
//         </a>
//       </div>
    
//     </Row>
//     <Row >
//       <Col xs={12} sm={12} md={12} lg={12}>
//         <a href="https://twitter.com" target="_blank"><FiTwitter className={classes.iconBkg} size={30} /></a>
//         <a href="https://github.com"><FiGithub className={classes.iconBkg} size={30} /></a>  
//         <a href="https://linkedin.com"><FiLinkedin className={classes.iconBkg} size={30} /></a>
//         <a href="https://instagram.com"><FiInstagram className={classes.iconBkg} size={30} /></a>
//       </Col>
//     </Row>
   
//     </Jumbotron>
//   )
// }

// <Col lg={12} sm={12} xs={12} md={12}>
//   <Navbar.Brand>
//     <a href="#about_me">
//       <BiChevronUpCircle className={classes.myChev} size={50} />
//     </a>
//   </Navbar.Brand>
// </Col>