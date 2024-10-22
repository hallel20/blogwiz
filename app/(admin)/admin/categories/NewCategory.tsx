import Button from "@/components/reusable/Button";
import ImageUploadModal from "@/components/reusable/ImageUploadModal";
import { createCategory } from "@/lib/actions";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const NewCategory = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [images, setImages] = useState<string[]>();
  return (
    <div className="container mx-auto py-10">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">
          Create New Category
        </h1>
        <button
          onClick={() => setOpen(false)}
          className="rounded-lg shadow p-2"
        >
          <IoMdCloseCircle size="30" />
        </button>
      </div>

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form action={createCategory}>
          {/* Category Name */}
          <div className="mb-4">
            <label
              htmlFor="category_name"
              className="block text-gray-700 font-bold mb-2"
            >
              Category Name
            </label>
            <input
              type="text"
              id="category_name"
              name="name"
              placeholder="Enter category name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Description */}
          <div className="mb-4">
            <label
              htmlFor="category_description"
              className="block text-gray-700 font-bold mb-2"
            >
              Category Description
            </label>
            <textarea
              id="category_description"
              name="category_description"
              rows={4}
              placeholder="Enter category description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          {/* Category Slug */}
          <div className="mb-4">
            <label
              htmlFor="slug"
              className="block text-gray-700 font-bold mb-2"
            >
              Category Slug
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              placeholder="Enter category slug (URL-friendly)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <small className="text-gray-600">Example: technology-news</small>
          </div>

          {/* Category Image */}
          <ImageUploadModal setImages={setImages} single />
          {images && (
            <>
              <Image
                src={images[0]}
                alt=""
                width="170"
                height="170"
                objectFit="cover"
                className="mt-3 rounded-md"
              />
              <input type="hidden" value={images[0]} name="image" />
            </>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit">Create Category</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;