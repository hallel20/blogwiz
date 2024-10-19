import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navibar from "../Navbar";
import Footer from "../Footer";

interface Props {
  children: ReactNode;
}

const PostLayout = ({ children }: Props) => {
  return (
    <>
      <Navibar />
      <Container>
        <div className="row my-5">
          <div className="col-md-9">{children}</div>
          <div className="col-md-3 mt-2">
            <Sidebar />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default PostLayout;
