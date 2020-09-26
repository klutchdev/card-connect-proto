import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Navbar from "../components/navbar"
import ContactForm from "../components/form"
import "../styling/index.scss"

const SignUpPage = () => {
  const links = [
    <Link to="/terminal">
      <small>COUNTERTOP</small>
      <br />↘ TERMINAL
    </Link>,
    <Link to="/virtual">
      <small>VIRTUAL</small>
      <br />↘ TERMINAL
    </Link>,
    <Link to="/integrations">
      <small>INTEGRATIONS</small>
      <br />↘ ADD ONS
    </Link>,
    <Link to="/hosted">
      <small>HOSTED PAYMENT</small>
      <br />↘ PAGE [HPP]
    </Link>,
    <Link to="/mobile">
      <small>CARDCONNECT</small>
      <br />↘ MOBILE APP
    </Link>,
  ]

  return (
    <>
      <Navbar children={links} hideSignUp={true} color=" #173750" />
      <SEO title="Sign up" />
      <ContactForm />
    </>
  )
}

export default SignUpPage
