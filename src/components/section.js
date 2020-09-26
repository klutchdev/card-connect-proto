import React from "react";
import '../styling/section.scss';


const Section = ({ headerText, serviceName, children, bgColor }) => (
  <section style={{ backgroundColor: bgColor }}>

    <div className="content-container">
      <h4>{ serviceName }</h4>
      <hr/>
      <h5>{ headerText }</h5>
      <ul>
        { children }
      </ul>
    </div>
  </section>
);

export default Section;