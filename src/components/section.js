import React from "react"
import { string, any } from "prop-types"
import "../styling/section.scss"

const Section = ({
  bgName,
  className,
  serviceName,
  headerText,
  children,
  svgIcon,
}) => (
  <section>
    <br />
    <div className="section-svg">{svgIcon}</div>
    <div className={bgName} />
    <div className={className}>
      <h4>{serviceName}</h4>
      <hr />
      <h5>{headerText}</h5>
      <hr />
      <ul>{children}</ul>
    </div>
  </section>
)

Section.propTypes = {
  bgName: string.isRequired,
  className: string.isRequired,
  serviceName: string.isRequired,
  headerText: string.isRequired,
  svgIcon: string.isRequired,
  children: any,
}

export default Section
