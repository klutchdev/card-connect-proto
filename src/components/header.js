import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ReactComponent as CardSVG } from "../card.svg"
import "../styling/header.scss"

function Header() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header title={data.site.siteMetadata.title}>
      <div className="gradient" />
      <h2>Make your payments</h2>
      <h3>Simple.Affordable.Secure.</h3>
      <h5>Serving the Bay Area for over 15 years</h5>
      <CardSVG />
    </header>
  )
}

export default Header
