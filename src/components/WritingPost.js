import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEO, { siteUrl, toAbsoluteUrl } from './SEO';
import { getPostBySlug, posts } from '../content/writing';
import './WritingPost.css';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const useReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
};

const WritingPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const progress = useReadingProgress();

  if (!post) {
    return <Navigate to="/writing" replace />;
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const previous = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < posts.length - 1
      ? posts[currentIndex + 1]
      : null;

  return (
    <div className="post-page">
      <SEO
        title={`${post.title} — Alixandra Acker`}
        description={post.summary || post.subtitle || ''}
        path={`/writing/${post.slug}`}
        type="article"
        image={post.image}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.summary || post.subtitle,
          datePublished: post.date,
          author: {
            '@type': 'Person',
            name: 'Alixandra Acker',
            url: siteUrl,
          },
          mainEntityOfPage: `${siteUrl}/writing/${post.slug}`,
          image: toAbsoluteUrl(post.image),
        }}
      />

      <div
        className="post-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />

      <article className="post">
        <div className="post-back">
          <Link to="/writing" className="post-back-link">
            &larr; Back to writing
          </Link>
        </div>

        <header className="post-header">
          <div className="post-meta">
            <span>{formatDate(post.date)}</span>
            {post.readTime && (
              <>
                <span className="post-meta-dot">·</span>
                <span>{post.readTime} min read</span>
              </>
            )}
            {post.tags && post.tags[0] && (
              <>
                <span className="post-meta-dot">·</span>
                <span>{post.tags[0]}</span>
              </>
            )}
          </div>

          <h1 className="post-title">{post.title}</h1>
          {post.subtitle && <p className="post-subtitle">{post.subtitle}</p>}

          <div className="post-byline">
            <span>By Alixandra Acker</span>
          </div>
        </header>

        {post.image && (
          <div className="post-hero">
            <img
              src={post.image}
              alt={post.title}
              onError={(e) => {
                e.currentTarget.parentElement.style.display = 'none';
              }}
            />
          </div>
        )}

        <div className="post-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>

        {(previous || next) && (
          <nav className="post-nav" aria-label="Adjacent posts">
            <div className="post-nav-prev">
              {previous && (
                <Link to={`/writing/${previous.slug}`} className="post-nav-link">
                  <span className="post-nav-label">&larr; Previous</span>
                  <span className="post-nav-title">{previous.title}</span>
                </Link>
              )}
            </div>
            <div className="post-nav-next">
              {next && (
                <Link to={`/writing/${next.slug}`} className="post-nav-link">
                  <span className="post-nav-label">Next &rarr;</span>
                  <span className="post-nav-title">{next.title}</span>
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>
    </div>
  );
};

export default WritingPost;
