import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <div className="justify-content-end">
        <Link href="posts/new">
          <Button>Add New Post</Button>
        </Link>
      </div>
      <div className="page-cover text-center">
        <h2>Welcome to Blogwiz</h2>
        <p className="display-6">A home to all kinds of Updates</p>
      </div>
    </div>
  );
}
