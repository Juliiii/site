import React from 'react'
import { AppContainer } from 'src/components'
import Presenter from './Presenter'
import Schedule from './Schedule'
import Iframe from 'react-iframe'
import { Box } from 'serverless-design-system'
import styled from 'styled-components'

const ResponsiveMap = styled(Iframe)`
  @media screen and (max-width: 415px) {
    height: 260px;
  }
`

export default class EnterpriseWorkshopContent extends React.Component {
  constructor() {
    super()
    this.state = {
      iFrameHeight: '600px',
    }
  }

  componentDidMount() {
    const windowGlobal = typeof window !== 'undefined' && window
    if (windowGlobal) {
      if (windowGlobal.innerWidth <= 415) {
        this.setState({ iFrameHeight: '260px' })
      }

      if (windowGlobal.innerWidth <= 1024) {
        this.setState({ iFrameHeight: '320px' })
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Box mt={[92, 92, 92, 92, 134]} mb={[450, 450, 470, 470, 790]}>
          <Schedule />
          <ResponsiveMap
            url='https://snazzymaps.com/embed/126425'
            width='100%'
            height={this.state.iFrameHeight}
          />
        </Box>
        <Presenter />
      </React.Fragment>
    )
  }
}
