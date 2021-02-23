/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from '../components/footer'


import 'uikit/dist/css/uikit.min.css'
import './layout.css'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      loading: true
    })
  }

  componentDidMount() {
    try {
      this.UIkit = require("uikit/dist/js/uikit");
      this.Icons = require("uikit/dist/js/uikit-icons");
      this.UIkit.use(this.Icons);
      this.setState({ loading: false })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { children } = this.props
    return (


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
          <>

            {!this.state.loading ?
              <>
                <Header siteTitle={data.site.siteMetadata.title} location={window.location} />

                <div>{children}</div>

                <Footer />
                </>
              :
              <>
                <div className="loadr" />
                <div className="loadr" />
              </>
            }
          </>
        )}
      />
    )
  }
}

export default Layout
