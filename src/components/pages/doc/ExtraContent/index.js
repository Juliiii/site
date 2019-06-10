import React from 'react'
import ProviderBanner from './ProviderBanner'
import OverviewExtraContent from 'src/components/pages/doc/OverviewExtraContent/index.js'
const providers = [
  'aws',
  'azure',
  'openwhisk',
  'google',
  'kubeless',
  'spotinst',
  'fn',
  'cloudflare',
]

const ExtraContent = ({ gitLink }) => (
  <React.Fragment>
    {providers.map(
      provider =>
        gitLink == `/docs/providers/${provider}/README.md` ? (
          <ProviderBanner provider={provider} />
        ) : null
    )}

    {gitLink == '/docs/README.md' ? <OverviewExtraContent /> : null}
  </React.Fragment>
)

export default ExtraContent