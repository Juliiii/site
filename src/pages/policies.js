import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/policies/Hero'
import IndustryStandard from 'src/components/pages/policies/IndustryStandard'
import CustomPolicies from 'src/components/pages/policies/CustomPolicies'
import ZeroCode from 'src/components/pages/policies/ZeroCode'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'

const Policies = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    startWithWhiteHeader={true}
  >
    <Helmet title='Serverless Policies' location={location} />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Hero />
        <IndustryStandard />
        <CustomPolicies />
        <ZeroCode />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Policies
