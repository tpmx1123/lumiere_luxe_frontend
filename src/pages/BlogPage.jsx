import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { blogAPI } from '../services/api';
import { formatLocalDate } from '../utils/dateUtils';
import './BlogPage.css';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const [blogs, featured] = await Promise.all([
        blogAPI.getAllBlogs(),
        blogAPI.getFeaturedBlogs()
      ]);
      setBlogPosts(blogs);
      setFeaturedBlog(featured.length > 0 ? featured[0] : null);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // formatDate uses the imported formatLocalDate utility
  const formatDate = formatLocalDate;

  if (loading) {
    return (
      <div className="blog-page">
        <div className="loading-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="container">
          <h1 className="blog-title">Beauty Blog</h1>
          <p className="blog-subtitle">
            Discover the latest trends, expert tips, and insider secrets from the world of luxury beauty.
            Stay updated with our professional insights and transformative beauty advice.
          </p>
        </div>
      </div>

      {/* Featured Post Section */}
      {featuredBlog && (
        <div className="featured-section">
          <div className="container">
            <div className="featured-post">
              <Link to={`/blog/${featuredBlog.id}`} className="featured-image" style={{ display: 'block' }}>
                <img src={featuredBlog.image} alt={featuredBlog.title} />
                <div className="featured-overlay">
                  <span className="featured-badge">Featured</span>
                </div>
              </Link>
              <div className="featured-content">
                <div className="post-meta">
                  <span className="post-category">{featuredBlog.category}</span>
                  <span className="post-date">{formatDate(featuredBlog.createdAt)}</span>
              
                </div>
                <Link to={`/blog/${featuredBlog.id}`} className="featured-title" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h2 className="featured-title">{featuredBlog.title}</h2>
                </Link>
                <p className="featured-excerpt">{featuredBlog.excerpt}</p>
                <Link to={`/blog/${featuredBlog.id}`} className="newsletter-btn">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      {blogPosts.length > 0 ? (
        <div className="blog-posts-section">
          <div className="container">
            <h2 className="section-title">Latest Articles</h2>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <Link to={`/blog/${post.id}`} className="blog-card-image" style={{ display: 'block' }}>
                    <img src={post.image} alt={post.title} />
                    <div className="card-overlay">
                      <span className="post-category">{post.category}</span>
                    </div>
                  </Link>
                  <div className="blog-card-content">
                    <div className="post-meta">
                      <span className="post-date">{formatDate(post.createdAt)}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 className="blog-card-title">{post.title}</h3>
                    </Link>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="read-more-link">
                      Read More <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="blog-posts-section">
          <div className="container">
            <div className="no-posts">
              <p>No blog posts available yet. Check back soon!</p>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter and be the first to know about new blog posts, 
              beauty tips, and exclusive offers.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
