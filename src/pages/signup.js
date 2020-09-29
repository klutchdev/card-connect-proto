/* eslint-disable react/jsx-key */
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Navbar from "../components/navbar"
import ContactForm from "../components/form"
import "../styling/index.scss"

function SignUpPage() {
  const links = [
    <Link to="/">
      <small>RETURN TO</small>
      <br />
      THE HOME SCREEN
    </Link>,
    <Link to="tel:">
      <small>GIVE US A CALL</small>
      <br />
      1(800)CARD-CONNECT
    </Link>,
    <Link to="mailto: test@123.com">
      <small>SEND US AN EMAIL</small>
      <br />
      info@ccsf.com
    </Link>,
  ]

  return (
    <>
      <Navbar hideSignUp={true}>{links}</Navbar>
      <SEO title="Sign up" />
      <ContactForm />
    </>
  )
}

export default SignUpPage
