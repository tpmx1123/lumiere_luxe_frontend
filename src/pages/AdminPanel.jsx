import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogAPI } from '../services/api';
import AdminBookings from './AdminBookings';
import './AdminPanel.css';

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('blogs');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchBlogs();
  }, [navigate]);

  const fetchBlogs = async () => {
    try {
      const data = await blogAPI.getAllBlogsAdmin();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/admin/login');
  };

  const handleAddNew = () => {
    navigate('/admin/blog/new');
  };

  const handleEdit = (blog) => {
    navigate(`/admin/blog/edit/${blog.id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await blogAPI.deleteBlog(id);
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  if (loading) {
    return <div className="admin-panel-loading">Loading...</div>;
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <div className="admin-actions">
          <span className="admin-username">Welcome, {localStorage.getItem('username')}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-tabs">
          <button 
            className={`admin-tab ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveTab('blogs')}
          >
            📝 Blog Posts
          </button>
          <button 
            className={`admin-tab ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            📋 Bookings
          </button>
        </div>

        {activeTab === 'blogs' && (
          <>
            <div className="admin-toolbar">
              <h2>Blog Posts Management</h2>
              <button onClick={handleAddNew} className="add-btn">Add New Blog Post</button>
            </div>

            <div className="blogs-table">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Featured</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map(blog => {
                    const statusBadgeClass = blog.status === 'PUBLISHED' ? 'status-published' : 'status-draft';
                    const statusText = blog.status || 'DRAFT';
                    
                    return (
                      <tr key={blog.id}>
                        <td>{blog.title}</td>
                        <td>{blog.category}</td>
                        <td>
                          <span className={`status-badge ${statusBadgeClass}`}>
                            {statusText}
                          </span>
                        </td>
                        <td>{blog.isFeatured ? 'Yes' : 'No'}</td>
                        <td>
                          <button onClick={() => handleEdit(blog)} className="edit-btn">Edit</button>
                          <button onClick={() => handleDelete(blog.id)} className="delete-btn">Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'bookings' && (
          <AdminBookings />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
