import Link from "next/link";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <div className="page-cover text-center text-white">
        <div className="text-end py-4 px-4">
          <Link href="posts/new">
            <Button>
              <FaPencil /> New Post
            </Button>
          </Link>
          <div className="gap"></div>
        </div>
        <h1>Welcome to Blogwiz</h1>
        <p className="display-6">A home to all kinds of Updates</p>
      </div>
      <Container className="my-5">
        <h3>Recent Posts</h3>
        <Row>
          <Col md={3}>
            <Card>
              <h3>Lorem Ipsum Dolor</h3>
              <p>Lorem ipsum dolor sit amet,</p>
            </Card>
          </Col>
          <Col md={3}>
            <Card></Card>
          </Col>
          <Col md={3}>
            <Card></Card>
          </Col>
          <Col md={3}>
            <Card></Card>
          </Col>
        </Row>
        <Button>
          All Recent Posts <FaChevronRight />
        </Button>
      </Container>
    </div>
  );
}
