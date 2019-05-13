import React from 'react'
import {
  Flex,
  Background,
  Row,
  Image,
  Text,
  Box,
} from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import guidesData from './Data'
import { InternalLink } from 'src/fragments'
import { P, Button } from 'src/fragments/DesignSystem'
import styled from 'styled-components'
require('./guides.css')

const FlexWithLaptopWidth = styled(Flex)`
  @media screen and (min-width: 1200px) and (max-width: 1500px) {
    width: 30% !important;
  }
`
const BackgroundWithBoxShadow = styled(Background)`
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  margin-top: -3px;

  @media screen and (min-width: 1200px) and (max-width: 1350px) {
    min-height: 588px;
  }
`

const BackgroundWithCustomHeight = styled(Background)`
  @media screen and (min-width: 1200px) and (max-width: 1350px) {
    height: 700px;
  }

  @media screen and (min-width: 1351px) and (max-width: 1390px) {
    height: 700px;
  }
`

const TitleText = ({ children, color }) => (
  <Text
    color={color}
    fontFamily={['SoleilBk', 'SoleilBk', 'Soleil']}
    fontSize={[18, 18, 24]}
    lineHeight={['30px', '30px', '38px']}
    letterSpacing='-0.38px'
    align='center'
  >
    {children}
  </Text>
)

const DevelopersGuide = () => (
  <BackgroundWithCustomHeight
    background='#f7f7f7'
    height={[2030, 2030, 2575, 2575, 604]}
  >
    <AppContainer>
      <Flex
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        width={[1, 1, 1, 1, 1]}
        alignItems={[
          'center',
          'center',
          'center',
          'center',
          'normal',
          'center',
        ]}
      >
        {guidesData.map((guide, index) => (
          <FlexWithLaptopWidth
            key={index}
            flexDirection={['column']}
            mb={42}
            mx={index === 1 ? [0, 0, 0, 0, '5%', '32px'] : 0}
          >
            <Box
              mt={
                index == 0
                  ? ['-234px', '-234px', '-223px', '-223px', '-250px', '-300px']
                  : [0, 0, 0, 0, '-250px', '-300px']
              }
            >
              <Image
                src={guide.image}
                maxHeight={[234, 234, 446, 446, 300]}
                maxWidth={[300, 300, 570, 570, '100%', 384]}
              />
            </Box>
            <BackgroundWithBoxShadow
              background='white'
              maxWidth={[300, 300, 570, 570, '100%', 384]}
              minHeight={['auto', 'auto', 'auto', 'auto', '522px', 'auto']}
            >
              <Box py={[42, 42, 52]} px={[26, 26, 118, 118, 32]}>
                <TitleText color={'#fd5750'}>{guide.metaTitle}</TitleText>
                <TitleText color={'#000000'}>{guide.title}</TitleText>
                <Flex flexDirection='column'>
                  <P align={['center']}>{guide.content}</P>
                  <Flex.verticallyCenter
                    justifyContent='space-between'
                    flexDirection={[
                      'column',
                      'column',
                      'row',
                      'row',
                      'column',
                      'row',
                    ]}
                    pt={22}
                    className={`homepage-guides-${guide.actions[0].text.replace(
                      ' ',
                      '-'
                    )}`}
                  >
                    <InternalLink to={guide.actions[0].link}>
                      <Button>{guide.actions[0].text}</Button>
                    </InternalLink>
                    <InternalLink to={guide.actions[1].link}>
                      <Text
                        fontSize='16px'
                        lineHeight='14px'
                        letterSpacing='0.67px'
                        color='#fd5750'
                        mt={[32, 32, 0, 0, 32, 0]}
                      >
                        {guide.actions[1].text}
                      </Text>
                    </InternalLink>
                  </Flex.verticallyCenter>
                </Flex>
              </Box>
            </BackgroundWithBoxShadow>
          </FlexWithLaptopWidth>
        ))}
      </Flex>
    </AppContainer>
  </BackgroundWithCustomHeight>
)

export default DevelopersGuide
