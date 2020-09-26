import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Section from "../components/section";
import Footer from "../components/footer";
import SecuritySVG from "../svg/security";
import ReportingSVG from '../svg/reporting';
import "../styling/index.scss";

const IndexPage = () => {
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
    <Link to="/signup">
      <small>CONNECT</small>
      <br />↘ WITH US
    </Link>,
  ];

  const reporting = [
    <li>Full Transaction Lifecycle Reporting</li>,
    <li>Mobile Optimization</li>,
    <li>Multiple Merchant Locations</li>,
    <li>Automatic Reconciliation</li>,
    <li>User Permission Management</li>,
  ];

  const security = [
    <li>Tokenization</li>,
    <li>P2PE</li>,
    <li>PCI Compliance</li>,
  ];

  const integrations = [
    <li>ISV Integrations | Partnership</li>,
    <li>Developer Tools | APIs, Support</li>,
    <li>Enterprise Solutions | Oracle, SAP</li>,
  ];

  return (
    <>
      <Navbar children={links} hideSignUp={false} />
      <SEO title="Home" />
      <Header key="index-header" />

      <Section
        bgColor="#fefefe"
        serviceName="REPORTING"
        headerText="Everything a business needs to view and manage transactions."
      >
      <ReportingSVG />
        {[...reporting]}
      </Section>

      <Section
        bgColor="#fefefe"
        serviceName="SECURITY"
        headerText="Protect transactions and reduce PCI scope with the most effective security solutions in the industry."
      >
      <SecuritySVG />
        {security}
      </Section>

      <Section
        bgColor="#fefefe"
        serviceName="INTEGRATIONS"
        headerText="Easily add secure payment acceptance capabilities into any application"
      >
        {[...integrations]}
      </Section>

      <Footer />
    </>
  );
};

export default IndexPage;
