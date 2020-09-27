import React from "react"
import { string, any } from "prop-types"
import "../styling/section.scss"

const Section = ({ bgName, className, serviceName, headerText, children }) => (
  <section>
    <div className={bgName} />
    <div className={className}>
      <h4>{serviceName}</h4>
      <hr />
      <h5>{headerText}</h5>
      <ul>{children}</ul>
    </div>
  </section>
)

Section.propTypes = {
  bgName: string.isRequired,
  className: string.isRequired,
  serviceName: string.isRequired,
  headerText: string.isRequired,
  children: any,
}

export default Section
