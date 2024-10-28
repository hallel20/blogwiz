"use client";

import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { useEffect, useState } from "react";
import { Category } from "@prisma/client";
import ImageUploadModal from "@/components/reusable/ImageUploadModal";
import { getCategories } from "@/lib/data";
import Image from "next/image";
import { createPost } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Spinner from "@/components/reusable/Spinner";
import { PostFormType } from "@/lib/formTypes";

const PostForm = () => {
  const [categories, setCategories] = useState<Category[]>();
  const [images, setImages] = useState<string[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const router = useRouter();

  const { register, reset, control, handleSubmit } = useForm<PostFormType>();

  useEffect(() => {
    const getStateCategories = async () => {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (ex) {
        setError("Could not fetch categories!");
      }
    };

    getStateCategories();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          console.log(data);
          setLoading(true);
          await createPost(data);
          setLoading(false);
          router.push("/admin/posts/");
        } catch (ex) {
          console.log(ex);
          setError("Something went wrong, please try again!");
          setLoading(false);
        }
      })}
    >
      {/* Handle Errors */}
      {error && (
        <p className="text-red-500 font-semibold text-center">{error}</p>
      )}
      {/* Post Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Post Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          placeholder="Enter your post title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Featured Image */}
      <div className="mb-4 flex flex-col gap-2">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Featured Image
        </label>
        {images?.length == 1 && (
          <>
            <Image
              src={images[0]}
              alt=""
              width="200"
              height="200"
              objectFit="cover"
              objectPosition="top"
              className="rounded-lg"
            />
            <input type="hidden" {...register("image")} value={images[0]} />
          </>
        )}
        <ImageUploadModal setImages={setImages} />
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Post Content
        </label>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              className="text-black"
              placeholder="Write your content here..."
              {...field}
            />
          )}
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 font-bold mb-2"
        >
          Category
        </label>
        <select
          id="category"
          {...register("categoryId")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled selected>
            ---
          </option>
          {categories?.map((category, i) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Slug */}
      <div className="mb-4">
        <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">
          Slug
        </label>
        <input
          type="text"
          id="slug"
          {...register("slug")}
          placeholder="Enter unique URL-friendly identifier"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <small className="text-gray-600">Example: technology-is-fun</small>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">
          Tags
        </label>
        <input
          type="text"
          id="tags"
          {...register("tags")}
          placeholder="Enter tags separated by commas"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <small className="text-gray-600">Example: travel, tips, guides</small>
      </div>

      {/* Post Status */}
      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
          Post Status
        </label>
        <select
          id="status"
          {...register("status")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 flex items-center justify-center text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Create Post {loading && <Spinner />}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
