"use client";

import ImageUploadModal from "@/components/reusable/ImageUploadModal";
import Spinner from "@/components/reusable/Spinner";
import { updatePost } from "@/lib/actions";
import { getCategories } from "@/lib/data";
import { PostFormType } from "@/lib/formTypes";
import { Category, PostStatus } from "@prisma/client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const EditPost = ({ post }: { post: any }) => {
  const [categories, setCategories] = useState<Category[]>();
  const [error, setError] = useState("");
  //   console.log(post);
  const [images, setImages] = useState<string[]>([post.images[0].url]);
  const [loading, setLoading] = useState(false);
  const { register, control, reset, handleSubmit } = useForm<PostFormType>({
    defaultValues: {
      title: post.title,
      content: post.content,
      categoryId: post.categoryId,
      tags: post.tags,
    },
  });

  useEffect(() => {
    const getCats = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    getCats();
  }, []);

  return (
    <form>
      <div className="flex flex-col p-6 font-sans">
        {/* Header with title, save, and preview buttons */}
        <header className="flex justify-between items-center pb-4 border-b border-gray-300">
          <input
            type="text"
            className="text-2xl font-bold border-none outline-none focus:outline-none"
            {...register("title")}
          />
          {/* <h1 >{post!.title}</h1> */}
          <div>
            <button
              onClick={handleSubmit(async (data) => {
                try {
                  setLoading(true);
                  console.log(data);
                  await updatePost(data, post.id);
                  setLoading(false);
                } catch (ex) {
                  setError("Something went wrong. Please try again!");
                  setLoading(false);
                }
              })}
              className="flex gap-2 bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
            >
              Save {loading && <Spinner />}
            </button>
            <button
              // onClick={handlePreview}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Preview
            </button>
          </div>
        </header>

        <div className="flex mt-6">
          {/* Main content editor */}
          <div className="flex-1 mr-8">
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <SimpleMdeReact
                  placeholder="Edit your post here..."
                  {...field}
                />
              )}
            />
          </div>

          {/* Sidebar with options */}
          <aside className="w-1/3 space-y-6">
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Category</label>

              <select
                {...register("categoryId")}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories?.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2">Tags</label>
              <input
                type="text"
                {...register("tags")}
                placeholder="Add tags"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* <div className="flex flex-col">
            <label className="font-semibold mb-2">Publish Date</label>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

            <div className="flex flex-col">
              <label className="font-semibold mb-2">Featured Image</label>
              {images && (
                <>
                  <input
                    type="hidden"
                    defaultValue={images[0]}
                    {...register("image")}
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Image
                    src={images[0]}
                    alt=""
                    width="150"
                    height="150"
                    className="object-cover rounded-lg"
                  />
                </>
              )}
            </div>
            <ImageUploadModal setImages={setImages} single />

            <div className="flex flex-col">
              <label className="font-semibold mb-2">SEO Settings</label>
              <select {...register("status")}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </aside>
        </div>
      </div>
    </form>
  );
};

export default EditPost;