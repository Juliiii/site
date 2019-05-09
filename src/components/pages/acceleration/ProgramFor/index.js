import React from 'react'
import { P } from 'src/fragments/DesignSystem'
import { Flex, Box } from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'

const WhoIsThisProgramFor = () => (
  <AppContainer>
    <Flex width={[1]} flexDirection='column' alignItems='center' mx='auto'>
      <P>Who the program is for</P>
      <Flex flexDirection='row' width={0.85}>
        <Box width={0.75} mr={32}>
          <P color='#5b5b5b'>
            The Serverless Accelerator Program is designed for development teams
            that are interested in doing Serverless development right. If you've
            realized the value that Serverless, from faster time to market to
            lower total cost of ownership, and would like assistance
          </P>
        </Box>
        <Box width={0.75}>
          <P color='#5b5b5b'>
            with standardizing tooling, defining best practices, architectural
            design, deployment strategies, and training your team then the
            Serverless Accelerator Program is probably right for you.
          </P>
        </Box>
      </Flex>
    </Flex>
  </AppContainer>
)

export default WhoIsThisProgramFor