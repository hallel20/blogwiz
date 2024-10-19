import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Badge, Container } from "react-bootstrap";
import Sidebar from "@/app/components/Sidebar";
import prisma from "@/prisma/client";
import postImage from "@/app/assets/images/vision.jpg";
import { Button, Flex, Text } from "@radix-ui/themes";
import { FaCalendar } from "react-icons/fa";

const RecentPosts = async () => {
  const posts = await prisma.post.findMany();
  function truncate(str: string, maxLenght: number) {
    return str.length > maxLenght ? str.slice(0, maxLenght - 1) : str;
  }

  return (
    <>
      <h3 className="my-5 border-bottom">Latest Posts</h3>

      {posts.map((post) => (
        <div key={post.id}>
          <div className="row my-4">
            <div className="card-image col-md-4">
              <Image
                width={400}
                height={300}
                src={postImage}
                alt="Post-Thumbnail"
              />
            </div>
            <Flex
              direction="column"
              gap="2"
              align="start"
              className="card-content col-md-7 my-3"
            >
              <h4>{post.title}</h4>
              <Text size="1" color="gray">
                <Flex direction="row" gap="2" align="center">
                  <FaCalendar />
                  {truncate(String(post.createdAt), 16)}
                </Flex>
              </Text>
              <p>{truncate(post.content, 200)}...</p>
              <Button color="brown" variant="soft">
                <Link href={`/posts/${post.id}`} className="app-link">
                  Read More
                </Link>
              </Button>
            </Flex>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default RecentPosts;
