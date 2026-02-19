import { getPostData, getSortedPostsData } from '@/lib/markdown';

// This tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 15+, params is a Promise and must be awaited
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0F172A] py-20 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-10 border-b border-border pb-8">
          <h1 className="text-4xl font-bold font-display mb-4 text-[#091210]">
            {postData.title}
          </h1>
          <div className="text-muted-foreground space-x-2 font-sans">
            <span>{postData.author}</span>
            <span>•</span>
            <time>{postData.date}</time>
          </div>
        </header>
        
        {/* The prose class requires @tailwindcss/typography plugin */}
        <div 
          className="prose prose-lg prose-slate max-w-none font-sans"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
        />
      </article>
    </main>
  );
}