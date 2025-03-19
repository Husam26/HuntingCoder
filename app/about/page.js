import Image from 'next/image';
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[450px] rounded-xl shadow-xl flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">About Hunting Coder</h1>
          <p className="text-xl text-gray-200">
            A place for developers to sharpen their skills and learn new tricks.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">What is Hunting Coder?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Hunting Coder is a community-driven platform for developers who want to improve their coding skills.
          Whether you're a beginner or an experienced developer, you'll find valuable resources, tutorials, and guides
          to help you grow as a developer. Our goal is to make learning fun and accessible, and to create a place where
          developers can share knowledge and grow together.
        </p>
      </section>

      {/* Author Section */}
      <section className="bg-gray-100 py-16 rounded-lg shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-semibold text-gray-800 mb-6">About the Creator</h3>
          <div className="flex justify-center">
            <div className="relative group">
              <Image
                src="/author.avif" // Replace with actual image file
                alt="Creator Image"
                width={250}
                height={250}
                className="rounded-full border-4 border-white shadow-lg transition-transform transform group-hover:scale-105"
              />
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Hi, I'm <span className="font-bold text-gray-800">John Doe</span>, the creator of Hunting Coder.
            I've been coding for over 10 years and have a passion for teaching others how to code.
            Through this blog, I aim to share my knowledge and experiences to help other
            developers grow and become better at what they do.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="text-center">
        <h4 className="text-3xl font-semibold text-gray-800 mb-6">Contact Me</h4>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          If you have any questions or want to collaborate, feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/yourprofile"
            className="text-blue-500 hover:text-blue-700 text-xl flex items-center space-x-2 transition-transform transform hover:scale-105"
          >
            <FaTwitter /> <span>Twitter</span>
          </a>
          <a
            href="https://github.com/yourprofile"
            className="text-gray-800 hover:text-gray-600 text-xl flex items-center space-x-2 transition-transform transform hover:scale-105"
          >
            <FaGithub /> <span>GitHub</span>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-green-500 hover:text-green-700 text-xl flex items-center space-x-2 transition-transform transform hover:scale-105"
          >
            <FaEnvelope /> <span>Email</span>
          </a>
        </div>
      </section>
    </div>
  );
}
