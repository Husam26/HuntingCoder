import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 bg-gray-50">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/home_image.avif"
          alt="Hunting Coder Hero Image"
          width={400}
          height={300}
          className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Hunting Coder</h1>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          A place for developers to sharpen their skills and learn new tricks.
        </p>

        {/* CTA Button */}
        <Link href="/blog">
          <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Explore Blogs
          </button>
        </Link>
      </div>
    </div>
  );
}
