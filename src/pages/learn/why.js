import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import Hero from 'src/components/pages/learn/why/Hero'
import ServerlessAppBenefits from 'src/components/pages/learn/why/AppBenefits'
import ServerlessFrameworkBenefits from 'src/components/pages/learn/why/FrameworkBenefits'
import AdditionalFeatures from 'src/components/pages/learn/why/AdditionalFeatures'
import { Helmet } from 'src/fragments'
import prefooter from 'src/components/pages/learn/Prefooter.js'

const Overview = ({ location }) => (
  <DefaultLayout prefooter={prefooter} transparentHeader>
    <Helmet
      title='Serverless Computing - The What &amp; Why'
      description='What is the Serverless computing movement about and why does it matter?'
      location={location}
    />
    <Hero />
    <ServerlessAppBenefits />
    <ServerlessFrameworkBenefits />
    <AdditionalFeatures />
  </DefaultLayout>
)

export default Overview