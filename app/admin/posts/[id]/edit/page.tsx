"use client";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { Button, Container } from "react-bootstrap";
import { Box, Text, TextField } from "@radix-ui/themes";
import { FaBookmark } from "react-icons/fa6";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

interface PostForm {
  title: string;
  content: string;
}

const NewPost = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<PostForm>();

  return (
    <Container className="pb-5">
      <form
        className="row justify-content-center"
        onSubmit={handleSubmit(async (data) => {
          await axios.post("/api/posts", data);
          router.push("/posts");
        })}
      >
        <h2 className="my-4 mx-5 py-3">Add a New Post</h2>
        <Box className="col-md-8">
          <p className="new-post-placeholder my-3">Post Title:</p>
          <TextField.Root placeholder="Post Title..." {...register("title")} />
          <p className="new-post-placeholder my-3">Post Content:</p>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Edit your post here..." {...field} />
            )}
          />

          <Box className="text-end">
            <Button type="submit">
              <FaBookmark /> Save Post
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default NewPost;
