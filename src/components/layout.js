import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './layout.css'

const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutWrapper>
        <div>
          {children}
        </div>
      </LayoutWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
