import React from 'react'
import Helmet from 'react-helmet'
import { Row, Column, Box } from 'serverless-design-system'
import Default from 'src/layouts/DefaultNewest'
import DocsWrapper from '../components/pages/doc/DocsWrapper'
import Sidebar from '../components/pages/doc/Sidebar'
import LiteHeader from '../components/pages/doc/LiteHeader'
import gitHubSvg from 'src/assets/images/github.svg'
import { Helmet as SEOHelmet } from 'src/fragments'

const DocTemplate = ({ data: { doc }, location }) => (
  <Default footerBackground={false} noPrefooter>
    <Helmet
      link={[
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css',
        },
      ]}
      script={[
        {
          src: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js',
          type: 'text/javascript',
        },
      ]}
    />

    <DocsWrapper __url={location.pathname}>
      <SEOHelmet {...doc.frontmatter} location={location} />
      <Box
        display={
          doc.frontmatter.gitLink == '/docs/README.md'
            ? ['none', 'none', 'none', 'none', 'block']
            : 'block'
        }
      >
        <LiteHeader url={location.pathname} />
      </Box>
      <Row className='docWrapper'>
        <Sidebar head={doc.frontmatter} />
        <Column>
          <a
            title='Edit this page on github'
            rel='noopener noreferrer'
            href={`https://github.com/serverless/serverless/edit/master${
              doc.frontmatter.gitLink
            }`}
          >
            <span className='editLink'>
              <img src={gitHubSvg} />
              <span className='text'>Edit on github</span>
            </span>
          </a>

          <Column
            dangerouslySetInnerHTML={{ __html: doc.content }}
            className='content'
          />
        </Column>
      </Row>
    </DocsWrapper>
  </Default>
)

export default DocTemplate

export const query = graphql`
  query Doc($docId: String!) {
    doc(id: { eq: $docId }) {
      id
      frontmatter {
        title
        menuText
        layout
        menuOrder
        gitLink
        description
        menuItems {
          menuText
          path
        }
      }
      content
    }
  }
`
