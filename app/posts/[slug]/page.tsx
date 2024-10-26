import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getPost } from "@/lib/data";

export default async function SinglePost({ params }: Params) {
  const { slug } = params; // Get the post ID from the URL
  const post = await getPost(slug);

  if (!post) {
    return <p className="text-3xl">Not found</p>;
  }

  return (
    <div className="prose">
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Post Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500">
              Published on {post.createdAt.toLocaleDateString()} by{" "}
              <span className="text-blue-600">{post.user.firstname}</span>
            </p>
          </div>

          {/* Post Image */}
          {post.images && (
            <div className="my-6">
              <img
                src={post.images[0].url}
                alt="Post Image"
                className="w-full rounded-md"
              />
            </div>
          )}

          {/* Post Content */}
          <div className="text-gray-700 leading-relaxed space-y-4">
            {post.content.split("\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-8 bg-gray-100 p-4 rounded-md flex items-center">
            <img
              src={post.user.email}
              alt={post.user.firstname + " " + post.user.lastname}
              className="h-16 w-16 rounded-full mr-4"
            />
            <div>
              <h4 className="font-bold text-lg">{post.user.username}</h4>
              <p className="text-gray-600">{post.user.bio}</p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            {/* Comment Form */}
            <form className="mb-6">
              <textarea
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Share your thoughts..."
                rows={4}
              />
              <button
                type="submit"
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Post Comment
              </button>
            </form>

            {/* Existing Comments */}
            <div className="space-y-4">
              {post.comments.map((comment, idx) => (
                <div key={idx} className="bg-gray-100 p-4 rounded-md">
                  <p className="font-bold">{comment.user.username}</p>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
