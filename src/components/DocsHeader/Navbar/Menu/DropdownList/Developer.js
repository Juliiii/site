import React from 'react'
import { Box, Flex, List, ListItem } from 'serverless-design-system'

import SubMenuTitle from './SubMenuTitle'
import SubMenuItem from './SubMenuItem'
import { developers, developersMenu as newDevelopers } from 'src/constants/urls'

const SubMenu = ({ title, options }) => (
  <Box>
    <SubMenuTitle>{title}</SubMenuTitle>
    <List m='0' p='0' mt={2}>
      {options.map(({ name, to, crossDomain, completed }) => (
        <ListItem.noStyleType my={2} key={name}>
          <SubMenuItem navProps={{ to, crossDomain, completed }}>
            {name}
          </SubMenuItem>
        </ListItem.noStyleType>
      ))}
    </List>
  </Box>
)

const quickStartOptions = [
  {
    name: 'aws',
    to: developers.quickStart.aws,
    completed: true,
  },
  {
    name: 'azure',
    to: developers.quickStart.azure,
    completed: true,
  },
  {
    name: 'google',
    to: developers.quickStart.google,
    completed: true,
  },
  {
    name: 'others',
    to: developers.quickStart.others,
    completed: true,
  },
]

const examplesOptions = [
  {
    name: `docs`,
    to: developers.examples.docs,
    completed: true,
  },
  {
    name: 'plugins',
    to: developers.examples.plugins,
    completed: true,
  },
  {
    name: 'examples',
    to: developers.examples.examples,
    completed: true,
  },
  {
    name: 'courses',
    to: newDevelopers.courses,
    completed: true,
  },
]

const Developer = () => (
  <Flex flexWrap='wrap'>
    <Box width={[1, 1, 1 / 2]}>
      <SubMenu title='resources' options={examplesOptions} />
    </Box>
    <Box width={[1, 1, 1 / 2]}>
      <SubMenu title='quick starts' options={quickStartOptions} />
    </Box>
  </Flex>
)

export default Developer
