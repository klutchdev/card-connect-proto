import React from "react"
import { Link } from "gatsby"
import "../styling/footer.scss"

const Footer = () => (
  <footer>
    <br />
    <div className="copyright">
      <p>
        <Link to="/privacy-policy">Privacy policy</Link>{" "}
        {` | © ${new Date().getFullYear()} copyright Card Connect SF`}
      </p>
      <small>an independent sales division of CardConnect, inc. </small>
    </div>
  </footer>
)

export default Footer
