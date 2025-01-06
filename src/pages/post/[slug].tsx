import { useRouter } from "next/router";
import Head from "next/head";
import posts from "@/data/posts";
import ReactMarkdown from "react-markdown";

interface Post {
  slug?: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

// Blog Post Page
export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find((item) => item.slug === slug);

  // Handle case where post is not found
  if (!post) {
    return (
      <div className="p-5">
        <h1 className="text-3xl">Post Not Found</h1>
        <p className="text-gray-600 mt-4">
          The blog post you're looking for doesn't exist.
        </p>

        {/* "Go Back" Button */}
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-primary rounded font-sans mt-4"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Dynamic Head for SEO and clarity */}
      <Head>
        <title>{`${post.title} | Nir Tuttnauer Blog`}</title>
        <meta
          name="description"
          content={`Read ${post.title} by ${post.author}, published on ${post.date}.`}
        />
      </Head>
      <div className="flex">

      {/* "Go Back" Button (Top) */}
      <button
        onClick={() => router.back()}
        className="px-4 py-2 text-primary rounded font-sans mb-4"
      >
        ←
      </button>

      <h1 className="text-4xl font-sans font-bold mb-4">{post.title}</h1>
      </div>
      <p className="text-sm font-mono text-gray-500 mb-6">
        By {post.author} on {post.date}
      </p>

      {/* Render the post content using ReactMarkdown */}
      <div className="font-sans text-lg text-white mb-8">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* "Go Back" Button (Bottom) */}
      <button
        onClick={() => router.back()}
        className="px-4 py-2 text-primary rounded font-sans"
      >
        ← Go Back
      </button>
    </div>
  );
}