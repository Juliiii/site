import React from 'react'
import {
  Flex,
  Background,
  Box,
  Image,
  Column,
  Text,
} from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import gcpLogo from 'src/assets/images/home/providers/gcp.jpg'
import awsLogo from 'src/assets/images/home/providers/aws.svg'
import kubelessLogo from 'src/assets/images/home/providers/kubeless.svg'
import cloudflareLogo from 'src/assets/images/home/providers/cloudflare.svg'
import openwhiskLogo from 'src/assets/images/home/providers/openwhisk.svg'
import azureLogo from 'src/assets/images/home/providers/azure.svg'
import styled from 'styled-components'
import { InternalLink } from 'src/fragments'
require('./Logos.css')

const BackgroundWithBorder = styled(Background)`
  box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`

const providerLinks = {
  aws: '/framework/docs/providers/aws/guide/quick-start/',
  azure: '/framework/docs/providers/azure/guide/quick-start/',
  openWhisk: '/framework/docs/providers/openwhisk/guide/quick-start/',
  gcp: '/framework/docs/providers/google/guide/quick-start/',
  kubeless: '/framework/docs/providers/kubeless/guide/quick-start/',
  cloudFlare: '/framework/docs/providers/cloudflare/guide/quick-start/',
}

const LogoBackground = ({ children }) => (
  <BackgroundWithBorder
    background='white'
    height={[95, 95, 126, 126, 158]}
    width={[125, 125, 166, 166, 208]}
    className={'provider-card-bg'}
  >
    {children}
  </BackgroundWithBorder>
)

const Logos = () => (
  <React.Fragment>
    <Flex pt={[0, 0, 50, 50, 260, 260]}>
      <Box ml={[30, 30, 100, 190, 200, 200]} mt={[-3, -3, 0]}>
        <InternalLink to={providerLinks.aws}>
          <LogoBackground>
            <Image
              src={awsLogo}
              width={[50, 50, 67, 67, 84]}
              height={[29, 29, 40, 40, 50]}
            />
          </LogoBackground>
        </InternalLink>
      </Box>
      <Box
        ml={[30, 30, 200, 280, 350, 390]}
        mt={[70, 70, 1, 1, 100]}
        mb={[0, 0, 57, 57, 0]}
        className='gcp-provider-laptop-fix'
      >
        <InternalLink to={providerLinks.gcp}>
          <LogoBackground>
            <Image
              src={gcpLogo}
              width={[88, 88, 117, 117, 147]}
              height={[51, 51, 68, 68, 86]}
            />
          </LogoBackground>
        </InternalLink>
      </Box>
    </Flex>
    <Flex
      justifyContent={[
        'space-between',
        'space-between',
        'space-between',
        'space-around',
        'space-between',
      ]}
      flexDirection={['column', 'column', 'row']}
    >
      <Box ml={[3, 3, 0]}>
        <InternalLink to={providerLinks.azure}>
          <LogoBackground>
            <Image
              src={azureLogo}
              width={[85, 85, 100, 100, 125]}
              height={[24, 24, 30, 30, 37]}
            />
          </LogoBackground>
        </InternalLink>
      </Box>
      <Column mt={[5, 5, 0]} mb={[3, 3, 0]}>
        <Heading.h3 align={['center', 'center', 'auto']}>
          With the power of choice
        </Heading.h3>
        <Text
          fontFamily='SoleilBk'
          color='#8c8c8c'
          lineHeight='30px'
          mx='auto'
          align={['center', 'center', 'auto']}
        >
          Deploy to all major cloud providers
        </Text>
      </Column>
      <Box mt={[73, 73, 53]} ml={[3, 3, 0]}>
        <InternalLink to={providerLinks.kubeless}>
          <LogoBackground>
            <Image
              src={kubelessLogo}
              width={[85, 85, 112, 112, 141]}
              height={[20, 20, 26, 26, 32]}
            />
          </LogoBackground>
        </InternalLink>
      </Box>
    </Flex>
    <Flex>
      <Box ml={[187, 187, 150, 220, 220, 280]} mt={[-145, -145, 0, -1, 0]}>
        <InternalLink to={providerLinks.openWhisk}>
          <LogoBackground>
            <Image
              src={openwhiskLogo}
              width={[92, 92, 122, 122, 153]}
              height={[20, 20, 24, 24, 31]}
            />
          </LogoBackground>
        </InternalLink>
      </Box>
      <Box
        ml={[-150, -150, 100, 140, 290, 265]}
        mt={[33, 33, 53, 33, 53]}
        className='cloudflare-provider-laptop-fix'
      >
        <InternalLink to={providerLinks.cloudFlare}>
          <LogoBackground>
            <Image
              src={cloudflareLogo}
              width={[84, 84, 112, 112, 140]}
              height={[29, 29, 38, 38, 47]}
            />
          </LogoBackground>
        </InternalLink>
      </Box>
    </Flex>
  </React.Fragment>
)

export default Logos
