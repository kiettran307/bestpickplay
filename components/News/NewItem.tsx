import Link from "next/link";
import React from "react";
import Image from "next/image";

export type NewProps = {
  title: string;
  content: string;
  image: string;
};

export function NewItem({ post }: { post: NewProps }) {
  return (
    <div className="bg-white rounded-md wow fadeInUp " data-wow-delay=".1s">
      <Link href="/" className="relative block h-[220px] w-full">
        <Image src={post.image || "/default.jpg"} alt={post.title} fill />
      </Link>
      <div className="p-4">
        <h3 className="">
          <Link
            href="/"
            className="block mb-4 text-xl font-bold text-black hover:text-primary sm:text-2xl text-ellipsis-2"
          >
            {post.title}
          </Link>
        </h3>
        <p className="text-base font-medium text-accent text-ellipsis-3 ">{post.content}</p>
      </div>
    </div>
  );
}
