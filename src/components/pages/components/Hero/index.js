import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import Image from './Image'
import { HeroWrapper } from 'src/fragments'

const ComponentsHero = props => (
  <HeroWrapper>
    <Flex flexDirection={['column', 'column', 'column', 'column', 'row']}>
      <Content />
      <Image />
    </Flex>
  </HeroWrapper>
)

export default ComponentsHero
