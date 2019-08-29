import React from 'react'
import { push } from 'gatsby-link'
import { Box, Card, DropDown } from 'serverless-design-system'

import { Tabs } from 'src/components'
import selectedTabBackground from 'src/assets/images/active-marker-new.png'
import mobileDropdownDoubleTriangle from 'src/assets/images/mobileDropdownDoubleTriangle.svg'

const onTabSelect = ({ navProps: { to, crossDomain } }) =>
  (crossDomain ? window.open : push)(to)

import styled from 'styled-components'
const Icon = styled.span`
  display: inline;
  border-color: ${({ isOpen }) => (isOpen ? 'white' : 'white')};
  border-style: solid;
  border-width: ${({ isOpen }) => (isOpen ? '0 5px 5px' : '5px 5px 0')};
  content: ' ';
  display: block;
  height: 0;
  margin-top: -ceil(2.5);
  position: absolute;
  right: 10px;
  top: 24px;
  width: 0;
  background: url(${mobileDropdownDoubleTriangle}) no-repeat center right;
`

Icon.defaultProps = { isOpen: false }

const HeroTabs = ({ data, selected, tabWidth }) => (
  <Box>
    <Box display={['none', 'none', 'none', 'none', 'block']}>
      <Card
        display='inline-block'
        border={'1px solid rgba(255, 255, 255, 0.2)'}
      >
        <Tabs
          data={data}
          labelStyle={{
            color: 'white',
            fontFamily: 'serverless',
            fontSize: 1,
            lineHeight: 1,
            letterSpacing: '0.4px',
            align: 'center',
          }}
          tabContainerStyle={{
            height: '46px',
            justifyContent: 'center',
            alignItems: 'center',
            mx: '20px',
          }}
          selectedTabContainerStyle={{
            background: `url(${selectedTabBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center',
            minWidth:
              tabWidth && tabWidth.selected ? tabWidth.selected : '75px',
            mx: '0px',
          }}
          selectedValue={selected}
          onTabSelect={onTabSelect}
        />
      </Card>
    </Box>

    <Box
      display={['block', 'block', 'block', 'block', 'none']}
      maxWidth='320px'
    >
      <DropDown
        options={data}
        value={selected}
        fieldContainerProps={{
          background: `url(${selectedTabBackground})`,
          backgroundSize: ['contain', 'contain', 'contain', 'contain'],
          backgroundRepeat: 'no-repeat',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
        placeholderProps={{ color: 'white' }}
        onChange={({ value }) =>
          data.every(tabData => {
            if (value !== tabData.value) {
              return true
            }
            onTabSelect(tabData)
          })
        }
      />
    </Box>
  </Box>
)

export default HeroTabs
