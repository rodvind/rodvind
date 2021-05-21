import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { createUseStyles } from 'react-jss'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import { BiChevronDownCircle } from 'react-icons/bi'

const useStyles = createUseStyles({
  myJumbo: {
    backgroundColor: '#333f42',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 0,
    borderRadius: 0,
  },
  myTitle: {
    color: '#B4975A',
    paddingTop: 50,
    paddingBottom: 20,
    fontSize: 95
  },
  myText: {
    color: '#838C95',
    padding: 10
  },
  iconBkg: {
    // fill: '#fff',
    color: '#fff',
    marginRight: 10,
    marginLeft: 10,
    '&:hover': {
      color: '#afd'
    },
  },
  paddingZero: {
    paddingRight: '0',
    paddingLeft: '0'
  },
  verticalCenter: {
    minHeight: '100vh',
    // display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    verticalAlign: 'middle'
  },
  conterCenter: {
    alignItems: 'center',
    verticalAlign: 'middle'
  },
  myChevRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // alignSelf: 'center',
    // textAlign: 'center',
    // alignContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  myChev: {
    color: '#fff',
    '&:hover': {
      color: '#afd'
    },
  },
  myView: {
    color: '#11ABB0',
    '&:hover': {
      color: '#161415'
    }
  }
})
export const Jumbo = ({ count }) => {
  const classes = useStyles()
  return (
    <Jumbotron id='home' className={`${classes.myJumbo} ${classes.verticalCenter}`}>
      <Container>
        <Row>
          <Col>
            <h1 className={classes.myTitle}>Hi, I'm Rodvin</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>A Full stack developer</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={classes.myText}>and this page has been viewed <span className={classes.myView}>{count}</span> times</p>
          </Col>
        </Row>
        <hr />
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FiTwitter className={classes.iconBkg} size={30} /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FiGithub className={classes.iconBkg} size={30} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin className={classes.iconBkg} size={30} /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram className={classes.iconBkg} size={30} /></a>
        <Container className={classes.myChevRow}>
          <Row >
            <Col>
              <a href="#about_me">
                <BiChevronDownCircle className={classes.myChev} size={50} />
              </a>        
            </Col>
          </Row>
        </Container>
      </Container>    
    </Jumbotron>
  )
}

// color:#333f42
// color:#B4975A
// color:#333f42
// Color: #c8102E
// color: #000
// color: #fff

// <Col xs={2} md={2} lg={2}>
//   <AiFillGithub className={classes.iconBkg} href="https://github.com" />
// </Col>
// <Col xs={2} md={2} lg={2}>
//   <AiOutlineTwitter className={classes.iconBkg} />
// </Col>
// <Col>
//   <FaLinkedinIn className={classes.iconBkg} />
// </Col>