import { NextResponse } from 'next/server'; // ✅ Import NextResponse
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'blogsData');

export async function GET(req) {
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*", // 🔥 Allow all origins (for testing)
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  try {
    const { searchParams } = new URL(req.url, process.env.NEXT_PUBLIC_BASE_URL);
    const postId = searchParams.get('id');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '3', 10);

    if (postId) {
      const filePath = path.join(postsDirectory, `${postId}.json`);
      if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      const content = fs.readFileSync(filePath, 'utf-8');
      return NextResponse.json(JSON.parse(content));
    }

    // Pagination logic
    const files = fs.readdirSync(postsDirectory);
    const posts = files.map((file) => {
      const filePath = path.join(postsDirectory, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    });

    // Calculate pagination data
    const startIndex = (page - 1) * limit;
    const paginatedPosts = posts.slice(startIndex, startIndex + limit);
    const total = posts.length;

    return NextResponse.json({
      posts: paginatedPosts,
      total: total,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 });
  }
}
