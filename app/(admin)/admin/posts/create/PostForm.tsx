"use client";

import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useEffect, useState } from "react";
import { Category } from "@prisma/client";
import ImageUploadModal from "@/components/reusable/ImageUploadModal";
import { getCategories } from "@/lib/data";

interface PostForm {
  title: string;
  content: string;
  categoryId: number;
  tags: string;
  image: string;
  status: string;
}

const PostForm = () => {
  const [categories, setCategories] = useState<Category[]>();
  const [images, setImages] = useState<string[]>();
  const [error, setError] = useState<string>();

  const { register, reset, control, handleSubmit } = useForm<PostForm>();

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
    <form onSubmit={() => handleSubmit}>
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
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Featured Image
        </label>
        <ImageUploadModal setImages={setImages} />
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Post Content
        </label>
        {/* <textarea
          id="content"
          name="content"
          rows={6}
          placeholder="Write your content here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea> */}
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Edit your post here..." {...field} />
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
          {categories?.map((category, i) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </select>
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
          name="status"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Create Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
