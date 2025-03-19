import { FaCalendarAlt, FaUser, FaTags, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

async function fetchBlogPost(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ; 
  const res = await fetch(`${baseUrl}/api/posts?id=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch the blog post");
  }

  return res.json();
}

export default async function BlogPage({ params }) {
  const { id } = await params;

  let blog;
  try {
    blog = await fetchBlogPost(id);
  } catch (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="bg-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto space-y-8 border border-gray-200">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug text-center">{blog.title}</h1>

        <div className="flex justify-center items-center text-gray-500 space-x-6 text-sm md:text-base">
          <span className="flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-500" />
            <span>{blog.date}</span>
          </span>
          <span className="flex items-center space-x-2">
            <FaUser className="text-blue-500" />
            <span>{blog.author}</span>
          </span>
        </div>

        {blog.tags?.length > 0 && (
          <div className="text-center">
            <span className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <FaTags className="text-blue-500" />
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-blue-500 bg-blue-100 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </span>
          </div>
        )}

        <p className="text-lg sm:text-xl text-gray-700 mt-3 text-center italic font-light">{blog.excerpt}</p>

        {blog.image && (
          <div className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-2xl"
              priority
            />
          </div>
        )}

        {/* Markdown Content Rendering */}
        <div className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {blog.content}
          </ReactMarkdown>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 rounded-lg shadow-md transition duration-300 text-lg font-semibold"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog List
          </Link>
        </div>
      </section>
    </div>
  );
}
