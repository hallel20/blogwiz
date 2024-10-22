import CategoryModal from "./Modal";

const page = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Manage Categories</h2>
        <CategoryModal />
      </div>

      {/* Responsive Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Category Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Post Count
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Technology</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  Posts related to the latest in tech
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">32 posts</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span className="relative">Active</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 mr-3">
                  Edit
                </a>
                <a href="#" className="text-red-500 hover:text-red-700">
                  Delete
                </a>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  Entertainment
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  Movies, music, and TV shows
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">18 posts</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                  <span className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                  <span className="relative">Inactive</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 mr-3">
                  Edit
                </a>
                <a href="#" className="text-red-500 hover:text-red-700">
                  Delete
                </a>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Travel</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  Adventure and travel guides
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">12 posts</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span className="relative">Active</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 mr-3">
                  Edit
                </a>
                <a href="#" className="text-red-500 hover:text-red-700">
                  Delete
                </a>
              </td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
