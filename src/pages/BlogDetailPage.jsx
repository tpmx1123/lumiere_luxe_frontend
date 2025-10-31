import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { blogAPI } from '../services/api';
import { formatLocalDate } from '../utils/dateUtils';
import './BlogPage.css';
import './BlogDetailPage.css';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await blogAPI.getBlogById(id);
        setPost(data);
      } catch (e) {
        setError('Blog not found');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="blog-page">
        <div className="loading-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-page">
        <div className="container" style={{ padding: '60px 0' }}>
          <p>{error || 'Blog not found'}</p>
          <button className="newsletter-btn" onClick={() => navigate('/blog')}>Back to Blog</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      {/* Hero Section with Featured Image */}
      <div className="blog-detail-hero">
        {post.image && (
          <div className="blog-detail-hero-image">
            <img 
              src={post.image} 
              alt={post.title}
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            <div className="hero-overlay"></div>
          </div>
        )}
        <div className="blog-detail-hero-content">
          <div className="container">
            <div className="hero-meta">
              <span className="post-category-badge">{post.category}</span>
              <span className="post-date-badge">{formatLocalDate(post.createdAt)}</span>
            </div>
            <h1 className="blog-detail-title">{post.title}</h1>
            {post.excerpt && (
              <p className="blog-detail-subtitle">{post.excerpt}</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="blog-detail-content-section">
        <div className="container">
          <div className="blog-detail-wrapper">
            <article className="blog-detail-article">
              {post.content && (
                <div
                  className="blog-detail-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}

              {/* Navigation */}
              <div className="blog-detail-navigation">
                <Link to="/blog" className="back-to-blog-btn">
                  <span className="back-arrow">←</span>
                  <span>Back to all articles</span>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-detail-sidebar">
              <div className="sidebar-card">
                <h3 className="sidebar-title">Share This Article</h3>
                <div className="share-buttons">
                  <button className="share-btn" onClick={() => {
                    navigator.share?.({ title: post.title, url: window.location.href });
                  }}>
                    📤 Share
                  </button>
                </div>
              </div>
              <div className="sidebar-card">
                <h3 className="sidebar-title">Category</h3>
                <span className="category-tag">{post.category}</span>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;


