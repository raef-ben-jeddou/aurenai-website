import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0F172A] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-12 font-space-grotesk">
          AurenAI Insights
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-200 p-6 rounded-md hover:shadow-sm transition-shadow bg-white">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-[#2A6B56] transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mb-4">{post.date} • {post.author}</p>
              <p className="text-gray-700">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-[#2E77A6] font-medium text-sm hover:underline"
              >
                Read full article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}