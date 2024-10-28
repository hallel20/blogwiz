import { getPosts } from "@/lib/data";
import { marked } from "marked";
import Link from "next/link";
import DeletePost from "../../(admin)/admin/posts/DeletePost";
import { getServerSession } from "next-auth";

const page = async () => {
  const posts = await getPosts();
  const session = await getServerSession();
  const user = session?.user;
  if (!posts)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <p className="text-3xl font-bold">There are no posts yet!</p>
      </div>
    );

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            {/* Thumbnail */}
            {post.images[0] && (
              <img
                src={post.images[0].url} // Assuming each image object has a `url` field
                alt={post.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}

            {/* Post details */}
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            </Link>
            <p className="text-gray-500 text-sm mb-2">
              By {post.user.username} in {post.category.name} •{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.split(",").map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full text-xs"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>

            {/* Markdown content preview */}
            <div
              className="text-gray-700 text-sm mb-4"
              dangerouslySetInnerHTML={{
                __html: marked(post.content.substring(0, 100) + "..."),
              }}
            />

            {/* Edit & Delete Buttons */}
            {user && user.role == "admin" && (
              <div className="flex justify-end gap-2">
                <Link
                  href={`/admin/posts/${post.slug}`}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Edit
                </Link>
                <DeletePost id={post.id} name={post.title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
