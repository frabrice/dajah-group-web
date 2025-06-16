import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Clock, Tag } from 'lucide-react';

// Import the blog posts data
import { blogPosts } from './BlogPage';

function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-military-50 pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-2xl font-bold text-military-900">Post not found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center mt-4 text-military-600 hover:text-military-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-military-50 pt-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center mb-8 text-military-600 hover:text-military-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-96 relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-military-900/90 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-military-900 mb-6">{post.title}</h1>

            <div className="flex items-center text-military-500 mb-8">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <span className="mx-3">•</span>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-military-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-military-100">
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-military-500" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-sm text-military-600 bg-military-50 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogPostPage;