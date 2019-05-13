import React from 'react'
import { HeroActionsNew as HeroActions } from 'src/fragments'

const FrameworkHeroActions = () => (
  <HeroActions
    firstBtn={{
      name: 'see the demo',
      to: '/enterprise/contact/',
      completed: true,
      className: 'position-hero',
    }}
    secondBtn={{
      name: 'get support',
      to: '/enterprise/contact/',
      completed: true,
      className: 'position-hero',
    }}
    flexDirection={['column', 'column', 'row']}
    justifyContent='center'
  />
)

export default FrameworkHeroActions
