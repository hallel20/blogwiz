"use client";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { Button, Container } from "react-bootstrap";
import { Box, Text, TextField } from "@radix-ui/themes";
import { FaBookmark } from "react-icons/fa6";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import Image from "next/image";

interface PostForm {
  title: string;
  image_url: string;
  content: string;
}

interface CloudinaryResult {
  public_id: string;
}

const NewPost = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<PostForm>();
  const [loading, setLoading] = useState(false);
  const [imageResource, setImageResource] = useState();

  return (
    <Container className="pb-5 col-md-8">
      <h2 className="my-4 mx-5 py-3 text-center">Add a New Post</h2>
      {imageResource ? (
        <CldImage
          src={imageResource}
          alt="Upload an Image"
          width={300}
          height={300}
        />
      ) : null}
      <CldUploadWidget
        uploadPreset="s9loy3bx"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          console.log(result);
        }}
        // onSuccess={(result, { widget }) => {
        //   console.log(result);
        //   // setImageResource(result?.info);
        // }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>

      <form
        className="row justify-content-center"
        onSubmit={handleSubmit(async (data) => {
          setLoading(true);
          await axios.post("/api/posts", data);
          setLoading(false);
          router.push("/admin/posts/list");
        })}
      >
        <Box>
          <input
            type="hidden"
            value={imageResource}
            {...register("image_url")}
          />
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
            <Button disabled={loading}>
              <FaBookmark /> Save Post
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : null}
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default NewPost;
