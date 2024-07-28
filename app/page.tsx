"use client";
import Image from "next/image";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function Home() {
  return (
    <div>
      <h2>Hello Next.JS</h2>
      <SimpleMDE /> Hello
    </div>
  );
}
