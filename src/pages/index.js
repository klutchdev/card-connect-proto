/* eslint-disable react/jsx-key */
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Section from "../components/section"
import Footer from "../components/footer"

import "../styling/index.scss"

function IndexPage() {
  const reporting = [
    <li>Full Transaction Lifecycle Reporting</li>,
    <li>Mobile Optimization</li>,
    <li>Multiple Merchant Locations</li>,
    <li>Automatic Reconciliation</li>,
    <li>User Permission Management</li>,
  ]

  const security = [
    <li>Tokenization</li>,
    <li>P2PE</li>,
    <li>PCI Compliance</li>,
  ]

  const integrations = [
    <li>ISV Integrations | Partnership</li>,
    <li>Developer Tools | APIs, Support</li>,
    <li>Enterprise Solutions | Oracle, SAP</li>,
  ]

  return (
    <>
      <Navbar hideSignUp={false}>
        <Link to="/terminal">
          <small>COUNTERTOP</small>
          <br />
          TERMINAL
        </Link>
        <Link to="/virtual">
          <small>VIRTUAL</small>
          <br />
          TERMINAL
        </Link>
        <Link to="/integrations">
          <small>INTEGRATIONS</small>
          <br />
          ADD ONS
        </Link>
        <Link to="/hosted">
          <small>HOSTED PAYMENT</small>
          <br />
          PAGE[HPP]
        </Link>
        <Link to="/mobile">
          <small>CARDCONNECT</small>
          <br />
          MOBILE APP
        </Link>
        <Link to="/signup">
          <small>CONNECT</small>
          <br />
          WITH US
        </Link>
      </Navbar>
      <SEO title="Home" />
      <Header />

      <Section
        headerText="Everything a business needs to view and manage transactions."
        className="reporting"
        bgName="reporting-bg"
        serviceName="Reporting"
        // svgIcon={reportingSVG}
      >
        {[...reporting]}
      </Section>

      <Section
        headerText="Protect transactions and reduce PCI scope with the most effective security solutions in the industry."
        className="security"
        bgName="security-bg"
        serviceName="Security"
      >
        {[...security]}
      </Section>

      <Section
        headerText="Easily add secure payment acceptance capabilities into any application"
        className="integrations"
        bgName="integrations-bg"
        serviceName="Integrations"
      >
        {[...integrations]}
      </Section>
      <Footer />
    </>
  )
}

export default IndexPage
