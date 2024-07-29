"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Container } from "react-bootstrap";
import { Box, Text, TextField } from "@radix-ui/themes";

const NewPost = () => {
  return (
    <div className="row justify-content-center">
      <h2 className="my-4">Add a New Post</h2>
      <Box className="col-md-8">
        <p className="new-post-placeholder my-3">Post Title:</p>
        <TextField.Root placeholder="Post Title..." />
        <p className="new-post-placeholder my-3">Post Content:</p>
        <SimpleMDE placeholder="Edit your post here..." />
        <Button>Save Post</Button>
      </Box>
    </div>
  );
};

export default NewPost;
