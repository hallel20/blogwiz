import Pagination from "@/app/components/Pagination";
import PostList from "@/app/components/PostList";
import React from "react";

const PopularPosts = () => {
  return (
    <>
      <h2 className="mt-5">Popular Posts</h2>
      <hr />
      <PostList />
      <Pagination />
    </>
  );
};

export default PopularPosts;
