import Link from "next/link";
import Image from "next/image";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaBookmark, FaChevronRight } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import postImage from "@/app/assets/images/mission.jpg";
import postImage1 from "@/app/assets/images/vision.jpg";
import { Text } from "@radix-ui/themes";
import Footer from "./Footer";
import Navibar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navibar />
      <div className="page-cover text-center text-white row">
        <p className="display-6">
          <span className="h2">Welcome to Blogwiz</span>
          <br />A home to all kinds of Updates
        </p>
      </div>
      <Container className="my-5">
        <h3>Recent Posts</h3>
        <Row>
          <Col md={3}>
            <Card>
              <FaBookmark size={40} className="card-icon" />
              <div className="card-img">
                <Image src={postImage} width={400} height={300} alt="vision" />
              </div>

              <div className="p-2">
                <h5>Lorem Ipsum Dolor</h5>
                <Text color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  imperdiet leo non dui dictum convallis. Quisque finibus nunc
                  orci, a maximus enim lobortis ut.
                </Text>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <FaBookmark size={40} className="card-icon" />
              <div className="card-img">
                <Image src={postImage1} width={400} height={300} alt="vision" />
              </div>

              <div className="p-2">
                <h5>Lorem Ipsum Dolor</h5>
                <Text color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  imperdiet leo non dui dictum convallis. Quisque finibus nunc
                  orci, a maximus enim lobortis ut.
                </Text>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <FaBookmark size={40} className="card-icon" />
              <div className="card-img">
                <Image src={postImage} width={400} height={300} alt="vision" />
              </div>

              <div className="p-2">
                <h5>Lorem Ipsum Dolor</h5>
                <Text color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  imperdiet leo non dui dictum convallis. Quisque finibus nunc
                  orci, a maximus enim lobortis ut.
                </Text>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <FaBookmark size={40} className="card-icon" />
              <div className="card-img">
                <Image src={postImage1} width={400} height={300} alt="vision" />
              </div>

              <div className="p-2">
                <h5>Lorem Ipsum Dolor</h5>
                <Text color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  imperdiet leo non dui dictum convallis. Quisque finibus nunc
                  orci, a maximus enim lobortis ut.
                </Text>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="text-end">
          <Link href="/posts/recent">
            <Button>
              All Recent Posts <FaChevronRight />
            </Button>
          </Link>
        </Row>

        <hr />
        <h3 className="mt-5">Popular Posts</h3>
        <Row>
          <Col md={3}>
            <Card>
              <FaBookmark size={40} className="card-icon" />
              <div className="card-img">
                <Image src={postImage} width={400} height={300} alt="vision" />
              </div>

              <div className="p-2">
                <h5>Lorem Ipsum Dolor</h5>
                <Text color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  imperdiet leo non dui dictum convallis. Quisque finibus nunc
                  orci, a maximus enim lobortis ut.
                </Text>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <FaBookmark size={40} className="card-icon" />
              <div className="card-img">
                <Image src={postImage1} width={400} height={300} alt="vision" />
              </div>

              <div className="p-2">
                <h5>Lorem Ipsum Dolor</h5>
                <Text color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  imperdiet leo non dui dictum convallis. Quisque finibus nunc
                  orci, a maximus enim lobortis ut.
                </Text>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <FaBookmark size={40} className="card-icon" />
              <div className="card-img">
                <Image src={postImage} width={400} height={300} alt="vision" />
              </div>

              <div className="p-2">
                <h5>Lorem Ipsum Dolor</h5>
                <Text color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  imperdiet leo non dui dictum convallis. Quisque finibus nunc
                  orci, a maximus enim lobortis ut.
                </Text>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <FaBookmark size={40} className="card-icon" />
              <div className="card-img">
                <Image src={postImage1} width={400} height={300} alt="vision" />
              </div>

              <div className="p-2">
                <h5>Lorem Ipsum Dolor</h5>
                <Text color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  imperdiet leo non dui dictum convallis. Quisque finibus nunc
                  orci, a maximus enim lobortis ut.
                </Text>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="text-end">
          <Link href="/posts/popular">
            <Button>
              All Popular Posts <FaChevronRight />
            </Button>
          </Link>
        </Row>
        <hr />
      </Container>
      <Footer />
    </div>
  );
}
