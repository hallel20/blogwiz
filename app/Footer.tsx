import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <div className="row py-4 bg-light footer">
        <div className="col-md-6">
          <Link href="/">
            <h2>Blogwiz Updates</h2>
          </Link>
          <p className="mt-4 small">&copy;CyberwizDev 2024</p>
        </div>
        <div className="col-md-3">
          <h4>More info</h4>
          <ul className="footer-list">
            <Link href="/about-us">
              <li>About Blog</li>{" "}
            </Link>
            <a href="https://hallelojowuro.com" target="blank">
              <li>About Author</li>
            </a>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Terms</h4>
          <ul className="footer-list">
            <Link href="/terms-and-conditions">
              <li>Terms &amp; Conditions</li>
            </Link>
            <Link href="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
