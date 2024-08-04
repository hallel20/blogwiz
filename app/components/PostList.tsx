import Image from "next/image";
import Link from "next/link";
import React from "react";
import postImage from "@/app/assets/images/vision.jpg";
import postImage1 from "@/app/assets/images/mission.jpg";

const PostList = () => {
  const id = 1;
  return (
    <div>
      <div className="row my-4">
        <div className="card-image col-md-4">
          <Image
            width={400}
            height={300}
            src={postImage}
            alt="Post-Thumbnail"
          />
        </div>
        <div className="card-content col-md-7 my-3">
          <h4>This is my blog&apos;s first post</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            imperdiet leo non dui dictum convallis. Quisque finibus nunc orci, a
            maximus enim lobortis ut.
          </p>
          <Link href={`posts/${id}`} className="app-link">
            Read More
          </Link>
        </div>
      </div>
      <hr />
      <div className="row my-4">
        <div className="card-image col-md-4">
          <Image
            width={400}
            height={300}
            src={postImage1}
            alt="Post-Thumbnail"
          />
        </div>
        <div className="card-content col-md-7 my-3">
          <h4>This is my blog&apos;s second post</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            imperdiet leo non dui dictum convallis. Quisque finibus nunc orci, a
            maximus enim lobortis ut.
          </p>
          <Link href={`posts/${id}`} className="app-link">
            Read More
          </Link>
        </div>
      </div>
      <hr />
      <div className="row my-4">
        <div className="card-image col-md-4">
          <Image
            width={400}
            height={300}
            src={postImage}
            alt="Post-Thumbnail"
          />
        </div>
        <div className="card-content col-md-7 my-3">
          <h4>This is my blog&apos;s first post</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            imperdiet leo non dui dictum convallis. Quisque finibus nunc orci, a
            maximus enim lobortis ut.
          </p>
          <Link href={`posts/${id}`} className="app-link">
            Read More
          </Link>
        </div>
      </div>
      <hr />
      <div className="row my-4">
        <div className="card-image col-md-4">
          <Image
            width={400}
            height={300}
            src={postImage1}
            alt="Post-Thumbnail"
          />
        </div>
        <div className="card-content col-md-7 my-3">
          <h4>This is my blog&apos;s second post</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            imperdiet leo non dui dictum convallis. Quisque finibus nunc orci, a
            maximus enim lobortis ut.
          </p>
          <Link href={`posts/${id}`} className="app-link">
            Read More
          </Link>
        </div>
      </div>
      <hr />
      <div className="row my-4">
        <div className="card-image col-md-4">
          <Image
            width={400}
            height={300}
            src={postImage}
            alt="Post-Thumbnail"
          />
        </div>
        <div className="card-content col-md-7 my-3">
          <h4>This is my blog&apos;s first post</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            imperdiet leo non dui dictum convallis. Quisque finibus nunc orci, a
            maximus enim lobortis ut.
          </p>
          <Link href={`posts/${id}`} className="app-link">
            Read More
          </Link>
        </div>
      </div>
      <hr />
      <div className="row my-4">
        <div className="card-image col-md-4">
          <Image
            width={400}
            height={300}
            src={postImage1}
            alt="Post-Thumbnail"
          />
        </div>
        <div className="card-content col-md-7 my-3">
          <h4>This is my blog&apos;s second post</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            imperdiet leo non dui dictum convallis. Quisque finibus nunc orci, a
            maximus enim lobortis ut.
          </p>
          <Link href={`posts/${id}`} className="app-link">
            Read More
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PostList;
