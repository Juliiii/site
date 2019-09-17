import React from 'react'

import { Helmet } from 'src/fragments'
import HomeLayout from 'src/layouts/Newest'
import { NewToServerlessPrefooter } from 'src/fragments'
import { Background, Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import Hero from 'src/components/pages/components/Hero'
import Simplicity from 'src/components/pages/components/Simplicity'
import WhitepaperDownloadBanner from 'src/components/pages/framework/Whitepaper'
import Reusability from 'src/components/pages/components/Reusability'
import Agnostic from 'src/components/pages/components/Agnostic'
import Fast from 'src/components/pages/components/Fast'

const Components = ({ location }) => (
  <HomeLayout
    prefooter={NewToServerlessPrefooter}
    transparentHeader={true}
    startWithWhiteHeader={true}
  >
    <Helmet title='Serverless Components' location={location} />
    <Background background={'#f7f7f7'}>
      <AppContainer>
        <Hero />
        <Simplicity />
        <Reusability />
        <Agnostic />
        <Fast />
      </AppContainer>
    </Background>

    <Background background='#f7f7f7'>
      <WhitepaperDownloadBanner />
    </Background>
  </HomeLayout>
)

export default Components
