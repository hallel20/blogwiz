import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    console.log("User:", session.user);
  } else {
    console.log("Not Authenticated");
  }
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Dashboard User</h1>
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500">Earnings</p>
          <p className="text-3xl font-bold">$628</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500">Share</p>
          <p className="text-3xl font-bold">2434</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500">Likes</p>
          <p className="text-3xl font-bold">1259</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500">Rating</p>
          <p className="text-3xl font-bold">8.5</p>
        </div>
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Bar Chart */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Result</p>
            <button className="bg-yellow-400 text-white px-4 py-1 rounded-md">
              Check Now
            </button>
          </div>
          <div className="h-48 mt-4 bg-gray-200 rounded-lg">
            {/* Bar chart placeholder */}
          </div>
        </div>

        {/* Circular Progress Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="h-48 w-48 mx-auto">
            <div className="flex justify-center items-center h-full">
              <div className="relative">
                <svg className="w-40 h-40" viewBox="0 0 36 36">
                  <path
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="4"
                    d="M18 2.0845a 15.9155 15.9155 0 1 1 0 31.831 15.9155 15.9155 0 1 1 0-31.831"
                  />
                  <path
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    strokeDasharray="45,100"
                    d="M18 2.0845a 15.9155 15.9155 0 1 1 0 31.831 15.9155 15.9155 0 1 1 0-31.831"
                  />
                </svg>
                <p className="absolute top-0 left-0 text-center w-full h-full flex justify-center items-center text-2xl">
                  45%
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500">Lorem ipsum</p>
            <p className="text-gray-500">Lorem ipsum</p>
            <p className="text-gray-500">Lorem ipsum</p>
            <button className="bg-yellow-400 text-white px-4 py-1 mt-4 rounded-md">
              Check Now
            </button>
          </div>
        </div>

        {/* Line Charts */}
        <div className="col-span-3 bg-white p-6 rounded-lg shadow-md mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 bg-gray-200 rounded-lg">
              {/* Placeholder for line chart */}
            </div>
            <div className="h-48 bg-gray-200 rounded-lg">
              {/* Placeholder for small line chart */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
