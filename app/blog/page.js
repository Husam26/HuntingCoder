"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

async function getBlogs(page = 1, limit = 3) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/posts?page=${page}&limit=${limit}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return { posts: [], total: 0 }; // Ensure we return a valid object
  }
}

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]); // ✅ Always starts as an empty array
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [loading, setLoading] = useState(true); // ✅ New state for loading

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      const blogsData = await getBlogs(page);
      setBlogs(blogsData?.posts || []); // ✅ Ensure it’s always an array
      setTotalBlogs(blogsData?.total || 0);
      setLoading(false);
    };

    loadBlogs();
  }, [page]); // Fetch new blogs every time `page` changes

  return (
    <div className="container mx-auto px-6 py-12 space-y-10">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] rounded-xl shadow-lg flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/blog_hero.avif')" }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Welcome to Hunting Coder Blog</h1>
          <p className="text-xl text-gray-200 mt-3">Insights, tutorials, and tips for developers.</p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p> // ✅ Show loading message
        ) : blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              key={blog.id || index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={blog.image || "/default-blog.jpg"}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <Link href={blog.link}>
                  <span className="inline-block mt-4 text-blue-500 hover:text-blue-700 font-semibold transition cursor-pointer">
                    Read More →
                  </span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blogs available.</p> // ✅ Show when no blogs exist
        )}
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-8">
        {/* Previous Button */}
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:opacity-50"
          disabled={page === 1 || loading}
        >
          Previous
        </button>

        <span className="text-gray-700 font-semibold">Page {page}</span>

        {/* Next Button */}
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:opacity-50"
          disabled={loading || blogs.length < 3}
        >
          Next
        </button>
      </div>
    </div>
  );
}
