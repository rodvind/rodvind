import React from 'react'
import styled from 'styled-components'
import { Terraform } from '@styled-icons/simple-icons/Terraform'
import { Kubernetes } from '@styled-icons/simple-icons/Kubernetes'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { JsSquare } from '@styled-icons/fa-brands/JsSquare'
import { Node } from '@styled-icons/fa-brands/Node'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { IoLogoIonic } from 'react-icons/io5'
import { Jss } from '@styled-icons/simple-icons/Jss'
import { SiTravisci, SiMongodb, SiPython, SiDocker, SiMariadb, SiApache, SiNginx, SiCss3, SiHtml5, SiMaterialUi, SiStyledComponents } from 'react-icons/si'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Col, Container, Image, Row } from 'react-bootstrap'

import PY from '../static/python.svg'
import TR from '../static/travis-ci-icon.svg'
import PS from '../static/postgresql-icon.svg'
import MS from '../static/mysql.svg'
import ANG from '../static/angular-icon.svg'
import Lam from '../static/Arch_AWS-Lambda_64.svg'
import CdK from '../static/Arch_AWS-Cloud-Development-Kit_64.svg'
import Cl9 from '../static/Arch_AWS-Cloud9_64.svg'
import CB from '../static/Arch_AWS-CodeBuild_64.svg'
import CC from '../static/Arch_AWS-CodeCommit_64.svg'
import CD from '../static/Arch_AWS-CodeDeploy_64.svg'
import CP from '../static/Arch_AWS-CodePipeline_64.svg'
import EC from '../static/Arch_Amazon-Elastic-Container-Service_64.svg'
import EKS from '../static/Arch_Amazon-Elastic-Kubernetes-Service_64.svg'
import AU from '../static/Arch_Amazon-Aurora_64.svg'
import RDS from '../static/Arch_Amazon-RDS_64.svg'
import DB from '../static/Arch_Amazon-DynamoDB_64.svg'
import BS from '../static/Arch_AWS-Elastic-Beanstalk_64.svg'
import AMP from '../static/Arch_AWS-Amplify_64.svg'
import CF from '../static/Arch_AWS-CloudFormation_64.svg'
import R53 from '../static/Arch_Amazon-Route-53_64.svg'
import APIG from '../static/Arch_Amazon-API-Gateway_64.svg'
import SCS from '../static/sass-lang-icon.svg'
import MonDB from '../static/mongodb.svg'
import CFront from '../static/Arch_Amazon-CloudFront_64.svg'
import Doc from '../static/docker.svg'
import K8 from '../static/kubernets.svg'
import Apache from '../static/apache.svg'
import Nod from '../static/nodejs.svg'
import Ion from '../static/ionic.svg'
import Ngx from '../static/nginx.svg'
import Tys from '../static/typescript.svg'
import RJ from '../static/react.svg'
import RJN from '../static/reactjs-icon.svg'
import JS from '../static/javascript.svg'
import JKS from '../static/jenkins-icon.svg'
import JV from '../static/java-icon.svg'
import GBY from '../static/gatsbyjs-icon.svg'
import MTU from '../static/material-ui-seeklogo.com.svg'
import JSS from '../static/jss-seeklogo.com.svg'
import NXT from '../static/next-js-seeklogo.com.svg'
import NTF from '../static/netlify-icon.svg'
import PHP from '../static/php-icon.svg'
import WRP from '../static/wordpress-icon.svg'
import STC from '../static/styled-components.svg'
import TRF from '../static/terraformio-icon.svg'
import CSS from '../static/css3.svg'
import HT from '../static/w3_html5-icon.svg'
import MRDB from '../static/mariadb-icon.svg'
import px2vw from '../utils/px2vw'
import SAM from '../static/aws_sam.svg'
import { Mongodb } from '@styled-icons/simple-icons'

const SvgIcon = styled(Image)`
  width: 50px;
  height: 50px;
  margin: 5px;
`
const Link = styled.a`
  color: #000;
  &:hover ${SvgIcon} {
    transition: transform .5s ease;
    color: #ff0000;
    transform: scale(1.25);
  }
`

const MariaIcon = styled(SiMariadb)`
  color: #000000;
  margin: 5px;
`

const TerrIcon = styled(Terraform)`
  color: #5c4ee5;
  margin: 5px;
`

const MariaLink = styled.a`
  &:hover ${MariaIcon} {
    transition: transform .5s ease;
    transform: scale(1.25);
  }
`

const HiddenOverflow = styled.div`
  overflow: hidden;
`


const StIcon = styled(SiStyledComponents)`
  color: #E49C6E;
  margin: 5px;
`
const JssIcon = styled(Jss)`
  color: #242A2E;
  margin: 5px;
`

const CSSIcon = styled(SiCss3)`
  color: #254BDD;
  margin: 5px;
`

const HIcon = styled(SiHtml5)`
  color: #DD4B25;
  margin: 5px;
`

const MatIcon = styled(SiMaterialUi)`
  color: #26B0FF;
  margin: 5px;
`

const ApachIcon = styled(SiApache)`
  color: #BC2045;
  margin: 5px;
`
const NgIcon = styled(SiNginx)`
  color: #219639;
  margin: 5px;
`




const DockIcon = styled(SiDocker)`
  color: #2496ED;
  margin: 5px;
`

const KuberIcon = styled(Kubernetes)`
  color: #3371e3;
  margin: 5px;
`
const ReactIcon = styled(ReactLogo)`
  color: #61dafb;
  margin: 5px;
`
const JSIcon = styled(JsSquare)`
  color: #F7DF1D;
  margin: 5px;
`
const NodeIcon = styled(Node)`
  color: #689F63;
  margin: 5px;
`
const TypeIcon = styled(Typescript)`
  color: #3178C6;
  margin: 5px;
`
const IonicIcon = styled(IoLogoIonic)`
  color: #4A8BFC;
  margin: 5px;
`
const TravisIcon = styled(SiTravisci)`
  /* color: #4A8BFC; */
  margin: 5px;
`
const MongoIcon = styled(SiMongodb)`
  color: #22984F;
  margin: 5px;
`
const PythoIcon = styled(SiPython)`
  color: #22984F;
  margin: 5px;
`

const JumbTool = styled(Jumbotron)`
  margin: 0;
  height: 40vh;
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

export const Tools = () => {
  return (
    <JumbTool>
      <Container>
        <Row>
          
          <Col xs={3} sm={3} md={3} lg={3}><ToolSpan>TOOLS I have been working with</ToolSpan></Col>
          <Col xs={12} sm={12} md={9} lg={9}>
            <Link href="https://aws.amazon.com/cloudformation" target="_blank"><SvgIcon src={CF} /></Link>
            <Link href="https://www.terraform.io/" target="_blank"><SvgIcon src={TRF} size="50" /></Link>
            <Link href="https://aws.amazon.com/api-gateway" target="_blank"><SvgIcon src={APIG} /></Link>
            <Link><SvgIcon src={K8} /></Link>
            <Link href="https://aws.amazon.com/route53" target="_blank" alt="Route 53"><SvgIcon src={R53} /></Link>
            <Link href="https://www.python.org/" target="_blank"><SvgIcon src={PY} /></Link>
            <Link href="https://aws.amazon.com/eks" target="_blank"><SvgIcon src={EKS} /></Link>  
            <Link href="https://angular.io" target="_blank"><SvgIcon src={ANG} /></Link>
            <Link href="https://aws.amazon.com/amplify" target="_blank"><SvgIcon src={AMP} /></Link>  
            <Link href="https://aws.amazon.com/elasticbeanstalk" target="_blank"><SvgIcon src={BS} /></Link>
            <Link href="https://sass-lang.com" target="_blank"><SvgIcon src={SCS} /></Link> 
            <Link href="https://aws.amazon.com/cloud9" target="_blank"><SvgIcon src={Cl9} /></Link>
            <Link><SvgIcon src={HT} /></Link>
            <Link><SvgIcon src={CFront} /></Link>
            <Link><SvgIcon src={Ion} /></Link>
            <Link href="https://aws.amazon.com/codeeploy" target="_blank"><SvgIcon src={CD} /></Link>
            <Link><SvgIcon src={CSS} /></Link>
            <Link><SvgIcon src={Doc} /></Link>
            <Link><SvgIcon src={STC} /></Link>
            <Link href="https://aws.amazon.com/codebuild" target="_blank"><SvgIcon src={CB} /></Link>
            <Link><SvgIcon src={MonDB} /></Link>
            <Link href="https://aws.amazon.com/ecs" target="_blank"><SvgIcon src={EC} /></Link>
            <Link><SvgIcon src={MTU} /></Link>   
            <Link><SvgIcon src={RJN} /></Link>
            <Link href="https://aws.amazon.com/codecommit" target="_blank"><SvgIcon src={CC} /></Link>
            <Link href="https://aws.amazon.com/dynamodb" target="_blank"><SvgIcon src={DB} /></Link>
            <Link><SvgIcon src={Nod} /></Link>
            <Link href="https://aws.amazon.com/rds" target="_blank"><SvgIcon src={RDS} /></Link>
            <Link><SvgIcon src={Tys} /></Link>
            <Link href="https://aws.amazon.com/cdk" target="_blank"><SvgIcon src={CdK} /></Link>
            <Link><SvgIcon src={JSS} /></Link>
            <Link><SvgIcon src={Apache} /></Link>
            <Link href="https://aws.amazon.com/rds/aurora" target="_blank"><SvgIcon src={AU} /></Link>
            <Link><SvgIcon src={Ngx} /></Link>
            <Link href="https://travis-ci.org" target="_blank"><SvgIcon src={TR} /></Link>
            <Link href="https://postgresql.org" target="_blank"><SvgIcon src={PS} /></Link>
            <Link href="https://www.mysql.com" target="_blank"><SvgIcon src={MS} /></Link>
            <Link href="https://aws.amazon.com/lambda" target="_blank"><SvgIcon src={Lam} /></Link>
            <Link><SvgIcon src={RJ} /></Link>
            <Link href="https://aws.amazon.com/codepipeline" target="_blank"><SvgIcon src={CP} /></Link>
            <Link><SvgIcon src={JS} /></Link>
            <Link><SvgIcon src={JKS} /></Link>
            <Link><SvgIcon src={GBY} /></Link>
            <Link><SvgIcon src={NXT} /></Link>
            <Link><SvgIcon src={JV} /></Link>
            <Link><SvgIcon src={NTF} /></Link>
            <Link><SvgIcon src={MRDB} /></Link>
            <Link><SvgIcon src={WRP} /></Link>
            <Link><SvgIcon src={SAM} /></Link>
          </Col>
        </Row>
      </Container>
    </JumbTool>
  )
}