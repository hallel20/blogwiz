"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Container } from "react-bootstrap";
import { Box, Text, TextField } from "@radix-ui/themes";
import { FaBookmark } from "react-icons/fa6";

const NewPost = () => {
  return (
    <Container className="pb-5">
      <div className="row justify-content-center">
        <h2 className="my-4">Add a New Post</h2>
        <Box className="col-md-8">
          <p className="new-post-placeholder my-3">Post Title:</p>
          <TextField.Root placeholder="Post Title..." />
          <p className="new-post-placeholder my-3">Post Content:</p>
          <SimpleMDE placeholder="Edit your post here..." />
          <Box className="text-end">
            <Button>
              <FaBookmark /> Save Post
            </Button>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default NewPost;
