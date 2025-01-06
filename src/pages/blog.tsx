import localFont from "next/font/local";
import Link from "next/link";
import posts from "@/data/posts";

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Blog Page Component
export default function BlogPage() {
  

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
      {/* Header */}
      <header className="bg-blue-700 text-white p-6">
        <h1 className="text-3xl font-sans">
          <Link href="/">Nir Tuttnauer Blog</Link>
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h2 className="text-xl font-sans mb-4">Latest Blog Posts</h2>
        {posts.map((post) => (
          <BlogPost key={post.slug} {...post} />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 text-center">
        <p className="font-sans">&copy; 2025 Nir Tuttnauer Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Blog Post Component
interface BlogPostProps {
  slug: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

function BlogPost({ slug, title, author, date, content }: BlogPostProps) {
  return (
    <article className="shadow-md rounded-lg p-4 mb-6 bg-white">
      <h3 className="text-2xl font-sans mb-2">
        <Link href={`/post/${slug}`} className="text-blue-600 hover:underline">{title}
        </Link>
      </h3>
      <p className="text-sm font-mono text-gray-500 mb-4">
        By {author} on {date}
      </p>
      <p className="font-sans text-gray-700">{content.slice(0, 100)}...</p>
      <Link href={`/post/${slug}`} className="text-blue-600 hover:underline mt-2 block">Read More
      </Link>
    </article>
  );
}