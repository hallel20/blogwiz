"use client";
import { CldUploadWidget } from "next-cloudinary";
import React from "react";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="s9loy3bx">
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
