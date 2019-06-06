import React from 'react'
import { TextField, Flex, Background } from 'serverless-design-system'
import styled from 'styled-components'
import searchIcon from 'src/assets/images/search-icon.svg'

const DocsSearchField = styled(TextField)`
  letter-spacing: 0.4px;
  background: url(${searchIcon}) no-repeat;
  background-position: right 15px center;
  background-size: 17.5px;
  boxShadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08) 
  
  &:focus,
  &:active {
    outline: none;
  }

  @media screen and (max-width: 767px) {
    border-left: none;
  }

  @media screen and (max-width: 412px) {
    border: none;
  }
`

export default class SearchBox extends React.Component {
  componentDidMount() {
    this.initializeSearch()
  }

  initializeSearch = () => {
    if (typeof docsearch !== 'undefined') {
      docsearch({
        // eslint-disable-line
        apiKey: 'd5a39b712b86965d93534207ef5423df',
        indexName: 'serverless',
        inputSelector: '#algolia-docs-header-search',
        debug: false, // set to true to style search box
      })
    } else {
      setTimeout(() => {
        this.initializeSearch()
      }, 50)
    }
  }

  render() {
    return (
      <DocsSearchField
        placeholder='Search documentation'
        height={24}
        width='100%'
        border='none'
        fontSize={14}
        fontFamily='Serverless'
        placeholderColor='#8c8c8c'
        px={[1, 1, 2]}
        id='algolia-docs-header-search'
        className='searchBox'
        color='#8c8c8c'
      />
    )
  }
}
