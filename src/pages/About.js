import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { createUseStyles } from 'react-jss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import rod from '../static/rod.jpeg'

const useStyles = createUseStyles({
  jumbo: {
    backgroundColor:'#000',
    padding: 0,
    margin: 0,
    height: '35vh',
    paddingTop: 20
  },
  myTitle: {
    color: '#fff'
  },
  myPara: {
    color: '#fff'
  },
  myPic: {
    width: 120,
    height: 130,
  },
  myCol: {
    paddingTop: 30
  }
})

 export const About = () => {
   const classes = useStyles()
   return (
    <Jumbotron id="about_me"  fluid className={classes.jumbo}>
      <Container >
        <Row>
          <Col xs={3} sm={3} lg={3} className={classes.myCol}>
            <Image  className={classes.myPic} src={rod} roundedCircle></Image>
          </Col>
          <Col className={classes.myCol}>
            <h1 className={classes.myTitle}>About me</h1>
            <p className={classes.myPara}>
            Hi, I'm Rodvin Danaei, a previous geneticist falling in love with programming and now a Full-stack Devloper, cloud advocate, data scientist, gamer, and a die-heart fan of all kinds of outdoor activities.
            </p>
          </Col>
        </Row>
        
      </Container>
    </Jumbotron>
  )
}
