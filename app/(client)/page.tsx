import CategoryBar from "@/components/CategoryBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navigation */}
      <CategoryBar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 flex">
        {/* Left Column (Main Content) */}
        <div className="w-2/3 pr-6">
          {/* Featured Article */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <Image
              width="200"
              height="200"
              src="https://via.placeholder.com/800x400"
              alt="Featured"
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">
              A New Cultural Hub for San Francisco
            </h2>
            <p className="text-gray-700">
              A preview of the latest cultural architectural landmark in San
              Francisco...
            </p>
          </div>

          {/* Watch Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Watch</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Watch article card */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  width="200"
                  height="200"
                  src="https://via.placeholder.com/400x200"
                  alt="Article"
                  className="rounded-lg mb-2"
                />
                <p className="text-gray-700">
                  Dwell Conversation with Architect X
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  width="200"
                  height="200"
                  src="https://via.placeholder.com/400x200"
                  alt="Article"
                  className="rounded-lg mb-2"
                />
                <p className="text-gray-700">A Modern Home Renovation</p>
              </div>
              {/* More articles as needed */}
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="w-1/3">
          {/* Advertisement Section */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold mb-4">Advertisement</h3>
            <Image
              width="200"
              height="200"
              src="https://via.placeholder.com/300x250"
              alt="Ad"
              className="rounded-lg"
            />
          </div>

          {/* Most Popular */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold mb-4">Most Popular</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li className="text-gray-700 hover:underline">
                <a href="#">5 Budget-Friendly Renovation Tips</a>
              </li>
              <li className="text-gray-700 hover:underline">
                <a href="#">10 Outdoor Furniture Ideas</a>
              </li>
              <li className="text-gray-700 hover:underline">
                <a href="#">The Prefab House Revolution</a>
              </li>
            </ul>
          </div>

          {/* Latest Posts */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Latest</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li className="text-gray-700 hover:underline">
                <a href="#">1. Latest Architectural Trends</a>
              </li>
              <li className="text-gray-700 hover:underline">
                <a href="#">2. Green Design Ideas</a>
              </li>
              <li className="text-gray-700 hover:underline">
                <a href="#">3. Modern Home Updates</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
