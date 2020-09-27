import React, { useState, useRef } from "react"
import { useClickOutside } from "../hooks"
import { bool, func, any } from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { ReactComponent as Brand } from "../brand.svg"
import "../styling/navbar.scss"

const Navbar = ({ children, hideSignUp }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useClickOutside(node, () => setOpen(false))

  return (
    <nav>
      <div className="nav">
        <Link to="/" className="brand">
          <Brand />
        </Link>
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
  children: any,
}

MenuToggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

Navbar.propTypes = {
  hideSignUp: bool.isRequired,
  children: any.isRequired,
}

export default Navbar
