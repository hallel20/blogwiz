import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Sidebar from "@/app/components/Sidebar";
import PostList from "@/app/components/PostList";

const RecentPosts = () => {
  return (
    <>
      <div className="page-cover text-white text-center">
        <div className="big-gap"></div>
        <h2 className="display-2">All Posts</h2>
      </div>
      <Container>
        <div className="row mt-5">
          <div className="col-lg-9">
            <h3 className="my-5 border-bottom">Latest Posts</h3>

            <PostList />
          </div>
          <div className="col-lg-3">
            <Sidebar />
          </div>
        </div>
      </Container>
    </>
  );
};

export default RecentPosts;
