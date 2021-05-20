import React from 'react'
import Container  from 'react-bootstrap/Container'
import  Jumbotron  from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { createUseStyles } from 'react-jss'
import { Image } from 'react-bootstrap'
import { MyBadge } from './Work'
import ASA from '../static/aws-certified-solutions-architect-associate.png'
import PMP from '../static/project-management-professional-pmp.png'
import { IoChevronUpCircleSharp } from 'react-icons/io5'
import styled from 'styled-components'

// const MyIcon = styled.Jumbotron`
//   &::after {
//     content: 
//   }
// `

const useStyles = createUseStyles({
  jumbo: {
    margin: 0,
    height: '70vh',
    // '&:after': {
    //   zIndex: 1,
    //   content: "\f077"
    // }
  },
  cert: {
    borderBottom: 'solid 1px #efabca',
    paddingBottom: 10,
  },
  myCerts: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingLeft: 10,
    // marginRight: 10
    paddingRight: 10
  },
  myChev: {
    color: '#525252',
    '&:hover': {
      color: '#afd',
    },
    zIndex: 1,
    position: 'absolute'
  },
})

export const Resume = () => {
  const classes = useStyles()
  return (
    <Jumbotron id="my_work" className={classes.jumbo}>
      <Container>
      <Row>
        <Col xs={4} sm={3} md={3} lg={3}>
          <span className={classes.cert}>CERTIFICATIONS</span>
        </Col>
        <Col xs={8} sm={9} md={9} lg={9}>
          <Col>
            <a href="https://www.credly.com/badges/9cbf6658-9301-4380-9bc9-6f20277f1d1f/public_url" target="_blank">
              <Image src={ASA} />
            </a>
            <a href="https://www.credly.com/badges/debc0506-c300-4f21-8331-0ff07cf4a6f6/public_url">
              <Image src={PMP} />
            </a>
          </Col>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={3} sm={3} md={3} lg={3}>
          <span className={classes.cert}>WORKS</span>
        </Col>
        <Col>
          <Col><p>EECOL<br/>Full-stack developer<span>. </span>December, 2020</p></Col>
          <Col><p>ReWatt<br />Feb, 2018</p></Col>
          <Col><p>Cenovus<br />Feb, 2018</p></Col>
        </Col>
      </Row>
      
      </Container>
    </Jumbotron>
  )
}