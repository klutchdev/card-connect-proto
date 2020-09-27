import React from "react"
import { string, any } from "prop-types"
import "../styling/section.scss"

const Section = ({ className, serviceName, headerText, children }) => (
  <section>
    <div className={className}>
      <h4>{serviceName}</h4>
      <hr />
      <h5>{headerText}</h5>
      <ul>{children}</ul>
    </div>
  </section>
)

Section.propTypes = {
  className: string.isRequired,
  serviceName: string.isRequired,
  headerText: string.isRequired,
  children: any,
}

export default Section
