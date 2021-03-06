# Components

---

## Imports

```jsx
import React, { useState, useRef, useEffect } from "react"
import { useClickOutside } from "../hooks"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import PropTypes from "prop-types"

import { useForm } from "react-hook-form"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Section from "../components/section"
import ContactForm from "../components/form"
import Footer from "../components/footer"

import "../styling/index.scss"
```

## Footer

```jsx
import React from "react"
import { Link } from "gatsby"
import "../styling/footer.scss"

const Footer = () => (
  <footer>
    <br />
    <div className="copyright">
      <p>
        <Link to="/privacy-policy">Privacy policy</Link>
        {` | © ${new Date().getFullYear()} copyright CardConnectSF.com`}
      </p>
      <small>
        CardConnectSF is an independent sales division of CardConnect,inc.{" "}
      </small>
    </div>
  </footer>
)

export default Footer
```

## Header

```jsx
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styling/header.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Path to SVG header icon //
  const svgIcon = <svg>*SVG CODE HERE*</svg>

  return (
    <header title={data.site.siteMetadata.title}>
      <div className="gradient" />
      <h2>Make your payments</h2>
      <h3>Simple.Affordable.Secure.</h3>
      <h5>Serving the Bay Area for over 15 years</h5>
      <div className="header-svg">{svgIcon}</div>
    </header>
  )
}

export default Header
```

## Section

```jsx
import React from "react"
import "../styling/section.scss"

const Section = ({ headerText, serviceName, children, bgColor }) => (
  <section style={{ backgroundColor: bgColor }}>
    <div className="content-container">
      <h6>{serviceName}</h6>
      <hr />
      <h6>{headerText}</h6>
      <ul>{children}</ul>
    </div>
  </section>
)

export default Section
```

## SEO

```jsx
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
```

## form

```jsx
import React from "react"
import { useForm } from "react-hook-form"

import "../styling/form.scss"

const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => console.log(values)

  return (
    <div className="form-container">
      <form name="contact" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="name">
            <label>
              My name is
              <input
                type="text"
                name="name"
                placeholder="First &amp; Last Name"
                ref={register({
                  required: "*",
                  pattern: {
                    value: /([a-zA-Z]+[\s]?([a-zA-Z]?['-]?[a-zA-Z])*[\s]{0})/,
                    message: "Please enter your name",
                  },
                })}
              />
              {errors.name && errors.name.message}
            </label>
          </div>

          <div className="company">
            <label>
              and I'm from
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                ref={register}
              />
            </label>
          </div>

          <div className="request">
            <label>
              I would like to
              <input
                type="text"
                name="topic"
                placeholder="a topic"
                ref={register({
                  required: "*",
                  pattern: {
                    value: /([\w\d\s.',\-!@#$&*`~[\]?<>":;\\/{}|%^()+=]{4,196})/,
                    message: "Must be between 4 and 196 char",
                  },
                })}
              />
              {errors.topic && errors.topic.message}
            </label>
          </div>

          <div className="phone">
            <label>
              You can call me at
              <input
                type="phonenumber"
                name="phone"
                placeholder="1(555)555-5555"
                ref={register({
                  pattern: {
                    value: /([\d]{0,1}[(.-]?[\d]{3}[).-\s]?[\d]{3}[.-]?[\d]{4})/g,
                    message: "Enter a phone number",
                  },
                })}
              />
              {errors.phone && errors.phone.message}
            </label>
          </div>

          <div className="email">
            <label>
              or send me an email
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                ref={register({
                  pattern: {
                    value: /([_]?[a-zA-Z0-9]+[_]?[.]?[a-zA-Z0-9]*[.]?[_]{0,1}@[\w\d]+[.]{1}[\w\d]+[.]?[\w\d]+)/g,
                    message: "Enter an email address",
                  },
                })}
              />
            </label>
            {errors.email && errors.email.message}
          </div>

          <div className="form-button-wrapper">
            <button className="form-button" type="submit">
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
```

## Navbar

```jsx
import React, { useState, useRef } from "react"
import { useClickOutside } from "../hooks"
import { bool, func } from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styling/navbar.scss"

const Navbar = ({ children, hideSignUp, color }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useClickOutside(node, () => setOpen(false))

  return (
    <nav>
      <div className="nav">
        <a href="/" className="brand">
          <svg
            width="156"
            height="24"
            viewBox="0 0 164 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>CardConnectSF</title>
            <path
              d="M41.3757 4.8176c-.3598-.092-.7196-.184-1.0794-.184-.3598-.092-.7196-.092-1.0794-.092-.3598 0-.7195-.092-.9894-.092-1.4391 0-2.7883.092-3.9577.368-1.1693.276-2.1587.552-3.0582.92v16.652h4.8572V8.9576c.1799-.092.5397-.092.9894-.184.3598-.092.7196-.092 1.0794-.092.6296 0 1.2592.092 1.8889.184.6296.092.2698.276.7195.368l1.5291-4.14c-.2698-.184-.5397-.276-.8994-.276zm121.2486 13.984c-.2698.092-.7195.276-1.3492.46-.6296.184-1.4391.276-2.5185.276-.6296 0-1.0794-.092-1.529-.184-.4498-.092-.8096-.368-1.0795-.644-.2698-.368-.5396-.828-.6296-1.38-.1799-.552-.1799-1.288-.1799-2.208v-8.096h7.2857v-2.484h-7.2857V.2176l-3.418.552v14.536c0 1.196.09 2.208.3598 3.036.18.92.5397 1.656 1.0794 2.208.5397.644 1.1693 1.104 2.0688 1.38.8095.276 1.9788.46 3.238.46 1.0794 0 2.0688-.092 2.9683-.368.8995-.276 1.4392-.46 1.799-.552l-.8096-2.668zM27.7037 6.2896c-.5397-.644-1.3492-1.104-2.2487-1.38-.9894-.368-2.1587-.46-3.5979-.46-.5396 0-1.0793 0-1.619.092-.5397.092-1.0794.092-1.5291.184s-.9894.184-1.3492.276c-.4497.092-.8095.184-1.0794.276l-.6296 3.956c.5397-.184 2.5185-.368 3.238-.46.8096-.092 1.6191-.184 2.4287-.184 1.2592 0 2.0687.276 2.6084.736.5397.46.7196 1.196.7196 2.024v.46c-.2698-.092-.7196-.184-1.1693-.184-.4497-.092-1.0794-.092-1.709-.092-.8995 0-1.799.092-2.6984.276-.8995.184-1.619.46-2.2487.92-.6296.184-1.1693.736-1.529 1.472-.3599.736-.6297 1.564-.6297 2.576s.1799 1.932.5397 2.668c.3597.736.8095 1.288 1.529 1.748.6297.46 1.4392.736 2.3387.92.8995.184 1.8889.276 2.9682.276 1.709 0 3.2381-.092 4.4074-.276 1.2593-.184 2.1588-.368 2.8784-.552v-10.12c0-1.104-.09-2.024-.3598-2.944-.2699-.92-.6297-1.656-1.2593-2.208zm-2.9683 12.144c-.2698.092-.6296.092-1.0793.092h-1.3492c-.8995 0-1.5291-.184-2.0688-.46-.5397-.276-.7196-.828-.7196-1.564 0-.368.09-.736.2699-1.012.1799-.276.3597-.46.7195-.644.2699-.184.6297-.276 1.0794-.276.3598-.092.8095-.092 1.2593-.092.3597 0 .7195 0 1.0793.092.3598.092.6297.092.8995.092v3.772h-.09zm-13.1322-.368c-.6297.092-1.2593.184-1.889.184-1.619 0-2.6983-.46-3.4179-1.288-.6296-.828-.9894-2.024-.9894-3.588 0-1.472.3598-2.576 1.0793-3.496.7196-.92 1.799-1.288 3.1482-1.288.6296 0 1.2593.092 1.799.184.5396.092 1.0793.276 1.529.46l.9895-3.864c-.7196-.276-1.4392-.552-2.1588-.644-.7196-.092-1.529-.276-2.5185-.276-1.3492 0-2.6085.184-3.6878.736-1.0794.46-1.9789 1.104-2.7884 1.932-.7196.828-1.3492 1.748-1.709 2.852-.3598 1.104-.6296 2.208-.6296 3.496 0 1.288.1799 2.484.4497 3.496.3598 1.104.8995 2.024 1.619 2.852.7196.828 1.6191 1.472 2.7884 1.932 1.0794.46 2.4286.644 3.9577.644.9894 0 1.9788-.092 2.7884-.276.8095-.184 1.529-.368 2.0687-.644l-.5396-3.956c-.5397.276-1.1693.46-1.889.552zM57.4762.3096l-4.8572.736v4.048c-.5396-.184-1.0793-.46-1.619-.552-.5397-.092-1.0794-.184-1.799-.184-1.2592 0-2.2486.184-3.238.644-.8995.46-1.709 1.012-2.3387 1.748-.6296.828-1.1693 1.748-1.529 2.852-.3599 1.104-.5397 2.392-.5397 3.772s.1798 2.576.6296 3.68c.3598 1.104.9894 2.024 1.709 2.76.8095.736 1.709 1.38 2.7883 1.748 1.0794.368 2.3387.644 3.7778.644.5397 0 1.1693 0 1.799-.092.6296-.092 1.2592-.092 1.8888-.184.6297-.092 1.1694-.184 1.799-.276.5397-.092 1.0794-.276 1.529-.368V.3096zm-4.7672 17.756c-.2698.092-.5397.092-.8995.092s-.8095.092-1.1693.092c-1.3492 0-2.3386-.46-2.9682-1.38-.6297-.92-.9895-2.116-.9895-3.588 0-3.128 1.1694-4.692 3.418-4.692.5397 0 .9894.092 1.4392.184.5397.092.8995.276 1.1693.46v8.832zm17.5397 1.38c-.7196.184-1.4392.184-2.2487.184-1.0794 0-1.9788-.184-2.6984-.46s-1.3492-.736-1.799-1.288c-.4497-.552-.8095-1.196-.9894-2.024-.1799-.736-.3598-1.656-.3598-2.576 0-2.116.4498-3.68 1.4392-4.692.9894-1.104 2.3386-1.656 4.0476-1.656.7196 0 1.3492.092 1.9788.184.6297.092 1.1694.276 1.709.552l.7196-2.576c-.7196-.276-1.529-.46-2.2487-.644-.8095-.092-1.619-.184-2.4285-.184-1.2593 0-2.5185.184-3.508.644-1.0793.46-1.9788 1.104-2.6984 1.84-.7196.828-1.2592 1.748-1.709 2.852-.3598 1.104-.6296 2.3-.6296 3.68 0 1.38.1799 2.484.5397 3.588.3598 1.104.8995 2.024 1.619 2.852.7196.828 1.619 1.38 2.6984 1.84 1.0794.46 2.3387.644 3.7778.644.4498 0 .8995 0 1.3492-.092.5397-.092.9894-.092 1.3492-.184s.8096-.184 1.1693-.276c.3598-.092.6297-.184.8096-.276l-.4498-2.576c-.1799.276-.7195.46-1.4391.644zm48.3016-12.88c-.5397-.736-1.2593-1.288-2.1588-1.656-.8994-.368-2.0687-.552-3.418-.552-1.529 0-2.8783.092-4.0476.276-1.1693.184-2.1587.368-2.8783.552v17.112h3.1482V7.3936c.09 0 .2698-.092.5396-.092.2699-.092.5397-.092.8995-.092s.6296-.092.9894-.092h1.0794c.8095 0 1.5291.092 2.0688.276.5397.184.9894.552 1.3492 1.012.3598.46.5397 1.104.7196 1.84.1799.736.1799 1.656.1799 2.76v9.2h3.1481v-9.752c0-1.196-.09-2.3-.3598-3.312-.3598-1.012-.7196-1.84-1.2592-2.576zm10.7037-2.208c-.9894 0-1.9789.184-2.9683.552-.9894.368-1.799.92-2.5185 1.656-.7196.736-1.3492 1.656-1.799 2.852-.4497 1.104-.6296 2.484-.6296 3.956 0 1.288.18 2.484.5397 3.588.3598 1.104.8995 2.024 1.619 2.852.7196.828 1.6191 1.38 2.6985 1.84 1.0793.46 2.4285.644 3.9576.644 1.1694 0 2.2487-.092 3.2381-.368.9895-.184 2.4286-.828 2.8783-1.012l-.7195-2.484c-.3598.184-1.5291.552-2.2487.736-.7196.184-1.619.46-2.7884.46-1.9788 0-3.418-.644-4.3174-1.564-.8096-.828-1.3492-2.024-1.5291-3.496 0-.184 0-.368-.09-.552-.1799-1.656.09-2.668.09-2.668.09-.552.1799-1.012.3598-1.564.1798-.552.5396-1.104.8994-1.564.3598-.46.8096-.828 1.3492-1.104.5397-.276 1.1693-.368 1.889-.368 1.2592 0 2.2486.46 2.9682 1.38.7196.92 1.0793 2.024 1.0793 3.404l-7.3756 1.472c0 .46.09 1.564.3598 2.208l10.254-2.024v-1.104c0-2.944-.6297-4.324-1.889-5.796-1.1693-1.196-2.9682-1.932-5.3068-1.932zm-26.5344 2.208c-.5397-.736-1.2593-1.288-2.1588-1.656-.8994-.368-2.0687-.552-3.418-.552-1.529 0-2.8782.092-4.0476.276-1.1693.184-2.1587.368-2.8783.552v17.112h3.1482V7.3936c.09 0 .2698-.092.5397-.092.2698-.092.5396-.092.8994-.092s.6297-.092.9895-.092h1.0793c.8095 0 1.5291.092 2.0688.276.5397.184.9894.552 1.3492 1.012.3598.46.5397 1.104.7196 1.84.1799.736.1799 1.656.1799 2.76v9.2h3.1481v-9.752c0-1.196-.09-2.3-.3598-3.312-.3598-1.012-.7195-1.84-1.2592-2.576zm-16.1006.276c-.7195-.736-1.619-1.38-2.6984-1.84-.9894-.46-2.1587-.644-3.418-.644-1.2592 0-2.2486.276-3.328.644-1.0794.368-1.8889 1.012-2.6984 1.84-.7196.828-1.3492 1.748-1.709 2.852-.4497 1.104-.6296 2.3-.6296 3.68 0 1.38.1799 2.576.6296 3.68.4497 1.104.9894 2.024 1.709 2.852.7196.736 1.619 1.38 2.6984 1.84.9894.46 2.1587.644 3.418.644s2.3386-.184 3.418-.644c1.0793-.46 1.8889-1.012 2.6984-1.84.7196-.828 1.3492-1.748 1.709-2.852.4497-1.104.6296-2.3.6296-3.68 0-1.38-.1799-2.576-.6296-3.68-.4497-1.104-1.0794-2.024-1.799-2.852zm-2.3386 11.132c-.8994 1.104-2.1587 1.656-3.6878 1.656-1.5291 0-2.7884-.552-3.6878-1.656-.8995-1.104-1.3492-2.668-1.3492-4.6 0-1.932.4497-3.496 1.3492-4.6.8994-1.104 2.1587-1.656 3.6878-1.656 1.529 0 2.7884.552 3.6878 1.656.8995 1.104 1.3492 2.668 1.3492 4.6 0 1.932-.4497 3.496-1.3492 4.6zm64.0424 1.472c-.6297.184-1.3493.184-2.1588.184-.9894 0-1.799-.184-2.5185-.46-.7196-.276-1.2593-.736-1.709-1.288s-.8095-1.196-.9894-2.024c-.1799-.828-.2699-1.656-.2699-2.576 0-2.116.4498-3.68 1.3493-4.692.8994-1.104 2.1587-1.656 3.8677-1.656.6296 0 1.709.092 2.3386.184.6296.092 1.4392.46 1.8889.644v-2.76c-.7196-.276-1.4392-.46-2.1587-.644-.7196-.092-1.5291-.184-2.2487-.184-1.2593 0-2.3386.184-3.328.644-.9895.46-1.889 1.104-2.5186 1.84-.7196.828-1.2592 1.748-1.619 2.852-.3598 1.104-.5397 2.3-.5397 3.68 0 1.288.1799 2.484.5397 3.588.3598 1.104.8994 2.024 1.529 2.852.7197.828 1.5292 1.38 2.6085 1.84.9895.46 2.2487.644 3.598.644.4497 0 .8994 0 1.3491-.092.4498-.092.8995-.092 1.3492-.184.4498-.092.8096-.184 1.0794-.276.3598-.092.5397-.184.7196-.276l-.4498-2.576c-.5396.368-1.0793.552-1.709.736z"
              fill={!color ? "currentColor" : color}
              fillRule="evenodd"
            ></path>
          </svg>
        </a>
        <div ref={node}>
          <MenuToggle open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen}>
            {children}
          </Menu>
        </div>
      </div>
      <Link to="/signup" hidden={hideSignUp}>
        <button className="sign-up">sign up</button>
      </Link>
    </nav>
  )
}

const StyledMenu = styled.nav`
  z-index: 9;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  padding: 1.4rem 2rem 2rem 2rem;
  text-align: left;
  background: #fefefefc;
  box-shadow: none;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  
  @media (min-width: 768px) {
    margin-left: ${({ open }) => (open ? "0.5rem" : "0")};
    width: 50vw;
    padding: 2rem;
  }


  a {
    margin: 0;
    font-size: 1.75rem;
    font-family: sans-serif;
    text-transform: uppercase;
    padding: 0.6rem 1.5rem;
    letter-spacing: 0.25rem;
    text-align: left;
    font-weight: 500;
    color: #0D0B1D35;
    text-decoration: none;
    transition: all 300ms linear;

    &:hover {
      color: #0D0B1D90;
    }
  }

  h2 {
    font-size: 2rem;
    padding: 0;
    margin: 0;
    letter-spacing: 0.075rem;
    font-weight: 500;
    color: #030303bb;
    text-decoration: none;
    transition: color 0.3s linear;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  h3 {
    margin: 0;
    color: #030303bb;
    padding: 0.2rem 0 0.5rem 0.5rem;
    letter-spacing: 0.1rem;
    text-align: left;
    transition: opacity 1s ease;
    border-bottom: 1px #03030325 dashed;
  }

  h4 {
    font-size: 1.1rem;
    padding-bottom: 1.25rem;
    padding-left: 0.25rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: 500;
    color: #03030395;
    text-decoration: none;
    transition: color 0.3s linear;
  }
}`

const Menu = ({ open, children }) => (
  <StyledMenu open={open}>
    <h3>Explore</h3>
    <br />
    {children}
  </StyledMenu>
)

const StyledMenuToggle = styled.button`
  z-index: 10;
  margin: 0;
  padding: 0;
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  top: ${({ open }) => (open ? "1.5rem" : "0.75rem")};
  right: ${({ open }) => (open ? "2.5rem" : "1.5rem")};
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    z-index: 10;
    top: ${({ open }) => (open ? "1.5rem" : "0.75rem")};
    right: ${({ open }) => (open ? "2.5rem" : "1.5rem")};
    transition: all 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  div {
    z-index: 10;
    height: ${({ open }) => (open ? "0.2rem" : "0.125rem")};
    position: relative;
    border-radius: 4rem;
    transform-origin: 0;
    transition: all 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    width: 2.5rem;
    background: #030303bb;
  
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      margin-bottom: ${({ open }) => (open ? "1.5rem" : "0")};
    }

    :nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
}
`

const MenuToggle = ({ open, setOpen }) => (
  <StyledMenuToggle open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
  </StyledMenuToggle>
)

Menu.propTypes = {
  open: bool.isRequired,
}

MenuToggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

Navbar.propTypes = {
  hideSignUp: bool.isRequired,
}

export default Navbar
```
