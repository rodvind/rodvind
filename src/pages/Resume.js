import React from 'react'
import Container  from 'react-bootstrap/Container'
import  Jumbotron  from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { createUseStyles } from 'react-jss'
import { Image } from 'react-bootstrap'
import { FaToolbox } from 'react-icons/fa'
import styled from 'styled-components'

import ASA from '../static/aws-certified-solutions-architect-associate.png'
import PMP from '../static/project-management-professional-pmp.png'
import { Tools } from './Tools'
import px2vw from '../utils/px2vw'



const Company = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0;
`
const Title = styled.p`
  font-size: 1rem;
  font-family: 'Libre Baskerville', serif;
  color: #6e7881;
  font-style: italic;

`
const Column = styled(Col)`
  line-height: 1rem;
`
const Dot = styled.span`
  color: #6e7881;
  font-size: 100%;
  margin-left: 5px;
  margin-right: 5px;
`

const useStyles = createUseStyles({
  jumbo: {
    margin: 0,
    height: '90vh',
    paddingBottom: 50,
  },
  cert: {
    borderBottom: 'solid 1px #11ABB0',
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

const JumbTool = styled(Jumbotron)`
  margin: 0;
  height: 80vh;
  
  @media (min-width: 768px) {
    width: 100%;
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
  @media (min-width: 320px) {
    width: 100%;
    min-height: ${px2vw(300)};
    height: 100%;
  }
`
const ToolSpan = styled.span`
  border-bottom: solid 1px #11ABB0;
  padding-bottom: 10px;
`
const Mytool = styled(FaToolbox)`
  font-size: 50px;
  padding-right: 15px;
  padding-bottom: 10px;
`

export const Resume = () => {
  const classes = useStyles()
  return (
    <JumbTool id="my_work" className={classes.jumbo}>
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
            <Column><Company>EECOL</Company><br/><Title>Full-stack developer<Dot>•</Dot>May 2019 - Present</Title></Column>
            <Column><Company>ReWatt Power</Company><br /><Title>Full-stack developer<Dot>•</Dot>December 2018 - May 2019</Title></Column>
            <Column><Company>Cenovus</Company><br /><Title>Engineering Information Management Technician<Dot>•</Dot>July 2014 - May 2019</Title></Column>
          </Col>
        </Row>
      <hr />
        <Row>
          <Col xs={3} sm={3} md={3} lg={3}><ToolSpan><Mytool />MY TOOLSET</ToolSpan></Col>
          <Col xs={12} sm={12} md={9} lg={9}>
            <Tools />
          </Col>
        </Row>
      </Container>
    </JumbTool>
  )
}