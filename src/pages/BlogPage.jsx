import React from 'react';
import Footer from '../components/Footer';
import './BlogPage.css';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Hair Care: Essential Tips for Healthy, Beautiful Hair",
      excerpt: "Discover the secrets to maintaining luscious, healthy hair with our expert tips and professional recommendations.",
      image: "https://fivestarnailsandspa.com/wp-content/uploads/2021/10/natural-nail-care-nailed-main.jpg'",
      date: "December 15, 2024",
      category: "Hair Care",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Luxury Nail Art Trends: What's Hot This Season",
      excerpt: "Explore the latest nail art trends and techniques that are taking the beauty world by storm.",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "December 12, 2024",
      category: "Nail Art",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Skincare Routine for Glowing, Radiant Skin",
      excerpt: "Learn about the essential steps in a luxury skincare routine that will give you that coveted glow.",
      image: "https://healthwire.pk/wp-content/uploads/2022/06/skin-care-tips-for-summer.jpg",
      date: "December 10, 2024",
      category: "Skincare",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Bridal Makeup: Creating the Perfect Wedding Day Look",
      excerpt: "Everything you need to know about bridal makeup, from trial sessions to the big day.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "December 8, 2024",
      category: "Makeup",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "The Science Behind Hair Coloring: Understanding the Process",
      excerpt: "Dive deep into the chemistry and artistry of professional hair coloring techniques.",
      image: "https://svenson.com.ph/wp-content/uploads/2023/04/back-view-of-a-woman-with-healthy-and-wavy-hair.jpg",
      date: "December 5, 2024",
      category: "Hair Color",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Luxury Spa Treatments: Indulge in Self-Care",
      excerpt: "Discover our premium spa treatments designed to rejuvenate your body and soul.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "December 3, 2024",
      category: "Spa",
      readTime: "5 min read"
    },
    {
      id: 7,
      title: "Eyebrow Shaping: The Perfect Arch for Your Face",
      excerpt: "Learn the art of eyebrow shaping and how to create the perfect arch that complements your facial features.",
      image: "https://aksshaparlour.com/wp-content/uploads/2018/07/Eyebrow-Shaping-and-Threading.jpg",
      date: "December 1, 2024",
      category: "Beauty Tips",
      readTime: "4 min read"
    },
    {
      id: 8,
      title: "Hair Extensions: Transform Your Look Instantly",
      excerpt: "Everything you need to know about hair extensions, from types to maintenance and styling tips.",
      image: "https://parisparker.com/wp-content/uploads/2024/07/vomor2.jpg",
      date: "November 28, 2024",
      category: "Hair Extensions",
      readTime: "6 min read"
    },
    {
      id: 9,
      title: "Anti-Aging Skincare: Your Guide to Youthful Skin",
      excerpt: "Discover effective anti-aging skincare routines and treatments to maintain youthful, radiant skin.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "November 25, 2024",
      category: "Anti-Aging",
      readTime: "7 min read"
    }
  ];

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
      <div className="featured-section">
        <div className="container">
          <div className="featured-post">
            <div className="featured-image">
              <img src="https://media.istockphoto.com/id/914169004/photo/stylish-manicure-and-make-up-in-a-pale-pink-color.jpg?s=612x612&w=0&k=20&c=3XlOi5gfM7HlXLEuyn0XIHBwYiGalWlv742F9idfOas=" alt="Featured Post" />
              <div className="featured-overlay">
                <span className="featured-badge">Featured</span>
              </div>
            </div>
            <div className="featured-content">
              <div className="post-meta">
                <span className="post-category">Beauty Tips</span>
                <span className="post-date">December 18, 2024</span>
                <span className="post-read-time">6 min read</span>
              </div>
              <h2 className="featured-title">
                The Complete Guide to Luxury Beauty: From Hair to Nails
              </h2>
              <p className="featured-excerpt">
                Embark on a journey through the world of luxury beauty services. Learn about our signature treatments, 
                expert techniques, and how to maintain that perfect look every day. Discover the secrets behind 
                professional beauty care and why choosing quality matters.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="blog-posts-section">
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <div className="card-overlay">
                    <span className="post-category">{post.category}</span>
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

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
