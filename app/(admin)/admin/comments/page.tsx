const page = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Manage Comments</h2>
      </div>

      {/* Responsive Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Commenter
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Comment
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Post
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
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
                <p className="text-gray-900 whitespace-no-wrap">John Doe</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  This is an awesome post! Thanks for sharing.
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  How to Boost Your SEO in 2024
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span className="relative">Approved</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  March 10, 2024
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 mr-3">
                  Approve
                </a>
                <a href="#" className="text-red-500 hover:text-red-700 mr-3">
                  Reject
                </a>
                <a href="#" className="text-red-500 hover:text-red-700">
                  Delete
                </a>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jane Smith</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  Interesting insights, but I think there’s more to cover.
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  The Ultimate Guide to Tailwind CSS
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                  <span className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
                  <span className="relative">Pending</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600 whitespace-no-wrap">
                  March 8, 2024
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <a href="#" className="text-blue-500 hover:text-blue-700 mr-3">
                  Approve
                </a>
                <a href="#" className="text-red-500 hover:text-red-700 mr-3">
                  Reject
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
