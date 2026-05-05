import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { posts } from '../content/writing';
import './Writing.css';

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
  });

const writingPreviewImage = posts.find((post) => post.image)?.image;

const Writing = () => {
  return (
    <div className="writing-page">
      <SEO
        title="Latest Writing — Alixandra Acker"
        description="Essays by Alixandra Acker on AI safety, AI governance, energy, political economy, and the global distribution of frontier AI risk."
        path="/writing"
        image={writingPreviewImage}
      />

      <section className="writing">
        <div className="container">
          <div className="writing-header">
            <h1 className="page-title">Latest Writing</h1>
            <p className="page-subtitle">
              Blog posts, essays, and punchy pieces on AI safety and
              governance, business, and the political economy of frontier AI,
              drawing on what I've read, heard, and want to think through more
              carefully.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="writing-empty">
              <p>New pieces coming soon.</p>
            </div>
          ) : (
            <div className="writing-grid">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/writing/${post.slug}`}
                  className="writing-card"
                >
                  <div className="writing-card-thumb">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="writing-card-thumb-fallback" aria-hidden />
                    )}
                  </div>
                  <div className="writing-card-body">
                    <div className="writing-card-meta">
                      <span>{formatDate(post.date)}</span>
                      {post.readTime && (
                        <>
                          <span className="writing-card-dot">·</span>
                          <span>{post.readTime} min read</span>
                        </>
                      )}
                    </div>
                    <h2 className="writing-card-title">{post.title}</h2>
                    {post.summary && (
                      <p className="writing-card-summary">{post.summary}</p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div className="writing-card-tags">
                        {post.tags.map((tag) => (
                          <span key={tag} className="writing-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Writing;
