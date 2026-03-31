"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  createdAt: string;
  slugTitle: string;
}

export default function NewsAndContact() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();

        // take only latest 3 blogs
        setBlogs(data.blogs.slice(0, 3));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="mt-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold font-montserrat tracking-wide">
            LATEST NEWS & ARTICLES
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm">
            Stay updated with the latest insights on smart building
            technologies, automation systems, and sustainable infrastructure
            solutions.
          </p>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {loading ? (
            <p className="text-center col-span-3 text-gray-400">Loading...</p>
          ) : (
            blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slugTitle}`}
                className="group"
              >
                <div className="relative w-full h-66 overflow-hidden rounded">
                  <img
                    src={`/api/uploads/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <h3 className="mt-4 font-semibold text-lg line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {blog.category}
                </p>

                <button className="mt-3 text-indigo-600 text-sm flex items-center gap-1 hover:gap-2 transition">
                  Read Article →
                </button>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
