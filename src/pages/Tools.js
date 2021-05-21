import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-bootstrap'

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
import SAM from '../static/aws_sam.svg'

const data = [
  { name: "CloudFormation", icon: CF, link: "https://aws.amazon.com/cloudformation" },
  { name: "Terraform", icon: TRF , link: "https://www.terraform.io/" },
  { name: "Api Gateway", icon: APIG, link: "https://aws.amazon.com/api-gateway" },
  { name: "Kubernetes", icon: K8, link: "https://kubernetes.io/" },
  { name: "Route 53", icon: R53, link: "https://aws.amazon.com/route53" },
  { name: "Python", icon: PY , link: "https://www.python.org/"  },
  { name: "EKS", icon: EKS, link: "https://aws.amazon.com/eks" },
  { name: "Angular", icon: ANG, link: "https://angular.io" },
  { name: "Amplify", icon: AMP, link: "https://aws.amazon.com/amplify" },
  { name: "Elastic Beanstalk", icon: BS, link: "https://aws.amazon.com/elasticbeanstalk" },
  { name: "SASS", icon: SCS, link: "https://sass-lang.com" },
  { name: "Cloud9", icon: Cl9, link: "https://aws.amazon.com/cloud9" },
  { name: "HTML", icon: HT, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CloudFront", icon: CFront, link: "https://aws.amazon.com/cloudfront/" },
  { name: "Ionic", icon: Ion, link: "https://ionicframework.com/" },
  { name: "CodeDeploy", icon: CD, link: "https://aws.amazon.com/codeeploy" },
  { name: "CSS", icon: CSS, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Docker", icon: Doc, link: "https://www.docker.com/" },
  { name: "Syled-Components", icon: STC , link: "https://styled-components.com/" },
  { name: "CodeBuild", icon: CB, link: "https://aws.amazon.com/codebuild" },
  { name: "mongoDB", icon: MonDB, link: "https://www.mongodb.com/" },
  { name: "Elastic Container Service", icon: EC, link: "https://aws.amazon.com/ecs" },
  { name: "Material-UI", icon: MTU , link: "https://material-ui.com/" },
  { name: "React Native", icon: RJN , link: "https://reactnative.dev/" },
  { name: "CodeCommit", icon: CC, link: "https://aws.amazon.com/codecommit" },
  { name: "DynamoDB", icon: DB, link: "https://aws.amazon.com/dynamodb" },
  { name: "Node.js", icon: Nod, link: "https://nodejs.org/en/" },
  { name: "RDS", icon: RDS, link: "https://aws.amazon.com/rds" },
  { name: "TypeScript", icon: Tys, link: "https://www.typescriptlang.org/" },
  { name: "Cloud Development Kit", icon: CdK, link: "https://aws.amazon.com/cdk" },
  { name: "JSS", icon: JSS , link: "https://cssinjs.org/?v=v10.6.0" },
  { name: "Apache", icon: Apache, link: "https://www.apache.org/" },
  { name: "Aurora", icon: AU, link: "https://aws.amazon.com/rds/aurora" },
  { name: "NGINX", icon: Ngx, link: "https://www.nginx.com/" },
  { name: "Travis CI", icon: TR, link: "https://travis-ci.org" },
  { name: "PostgreSQL", icon: PS, link: "https://postgresql.org" },
  { name: "MySQL", icon: MS, link: "https://www.mysql.com" },
  { name: "AWS Lambda", icon: Lam, link: "https://aws.amazon.com/lambda" },
  { name: "React", icon: RJ, link: "https://reactjs.org/" },
  { name: "CodePipeline", icon: CP, link: "https://aws.amazon.com/codepipeline" },
  { name: "Jenkins", icon: JKS, link: "https://www.jenkins.io/" },
  { name: "JavaScript", icon: JS , link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Gatsby", icon: GBY , link: "https://www.gatsbyjs.com/" },
  { name: "Next.js", icon: NXT , link: "https://nextjs.org/" },
  { name: "JAVA", icon: JV, link: "https://www.java.com/en/" },
  { name: "netlify", icon: NTF , link: "https://www.netlify.com/" },
  { name: "WordPress", icon: WRP , link: "https://wordpress.com/" },
  { name: "MariaDB", icon: MRDB , link: "https://mariadb.org/" },
  { name: "Serverless Application Model", icon: SAM , link: "https://aws.amazon.com/serverless/sam/" },
  { name: "PHP", icon: PHP, link: "https://www.php.net/" }
]

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
export const Tools = () => {
  return (
    data.map(log => {
      return(
        <Link href={log.link} key={log.name} alt={log.name} target="_blank">
          <SvgIcon src={log.icon} />
        </Link>
      )  
    })
  )
}