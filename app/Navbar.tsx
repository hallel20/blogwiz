"use client";
import Link from "next/link";
import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { GiAbstract003 } from "react-icons/gi";

const Navibar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary py-4 align-center">
        <Container fluid>
          <Navbar.Brand href="/home">
            <GiAbstract003 size="50" />
            <span className="brandname px-3">Blogwiz Updates</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Blogwiz
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Form className="d-flex px-5">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary">Search</Button>
                </Form>
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <NavDropdown
                  title="Posts"
                  id="offcanvasNavbarDropdown-expand-md"
                >
                  <NavDropdown.Item>
                    <Link href="/posts/popular" className="nav-link">
                      Popular Posts
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link href="/posts/recent" className="nav-link">
                      Recents Posts{" "}
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link href="/about-us" className="nav-link">
                  About
                </Link>
                <Link href="contact-us" className="nav-link">
                  Contact
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navibar;
