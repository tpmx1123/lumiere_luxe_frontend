import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogAPI } from '../services/api';
import { uploadImageToCloudinary } from '../services/cloudinary';
import { Editor } from '@tinymce/tinymce-react';
import './BlogFormPage.css';

const BlogFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const editorRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    image: '',
    category: '',
    content: '',
    isFeatured: false,
    status: 'DRAFT'
  });

  const isEditMode = !!id;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    if (isEditMode) {
      fetchBlogData();
    }
  }, [id, navigate, isEditMode]);

  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const blogs = await blogAPI.getAllBlogsAdmin();
      const blog = blogs.find(b => b.id === parseInt(id));
      
      if (blog) {
        setFormData({
          title: blog.title || '',
          excerpt: blog.excerpt || '',
          image: blog.image || '',
          category: blog.category || '',
          content: blog.content || '',
          isFeatured: blog.isFeatured || false,
          status: blog.status || 'DRAFT'
        });
      } else {
        alert('Blog post not found');
        navigate('/admin/panel');
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      alert('Failed to load blog post');
      navigate('/admin/panel');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await blogAPI.updateBlog(parseInt(id), formData);
      } else {
        await blogAPI.createBlog(formData);
      }
      navigate('/admin/panel');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog post. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('Image size should be less than 10MB');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const imageUrl = await uploadImageToCloudinary(file, (progress) => {
        setUploadProgress(progress);
      });
      setFormData(prev => ({
        ...prev,
        image: imageUrl
      }));
      setUploadProgress(100);
      setTimeout(() => {
        setUploading(false);
        setUploadProgress(0);
      }, 1000);
    } catch (error) {
      console.error('Error uploading image:', error);
      const errorMessage = error.message || 'Upload failed';
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      if (errorMessage.includes('preset') || errorMessage.includes('Upload preset')) {
        alert('Upload preset not configured. Please paste the image URL directly in the URL box below, or contact administrator to set up Cloudinary preset.');
      } else {
        alert(`Upload failed: ${errorMessage}\n\nYou can still paste the image URL directly in the URL box below.`);
      }
      
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleEditorImageUpload = async (blobInfo, progress) => {
    try {
      setUploading(true);
      setUploadProgress(0);

      const file = new File([blobInfo.blob()], blobInfo.filename(), { type: blobInfo.blob().type });

      const imageUrl = await uploadImageToCloudinary(file, (uploadProgress) => {
        setUploadProgress(uploadProgress);
        progress(uploadProgress);
      });

      setUploading(false);
      setUploadProgress(0);
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false);
      setUploadProgress(0);
      throw error;
    }
  };

  if (loading) {
    return <div className="blog-form-loading">Loading...</div>;
  }

  return (
    <div className="blog-form-page">
      <div className="blog-form-header">
        <div className="blog-form-header-left">
          <button onClick={() => navigate('/admin/panel')} className="back-btn">
            ← Back to Admin Panel
          </button>
          <h1>{isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}</h1>
        </div>
        <div className="blog-form-header-right">
          <span className="admin-username">Welcome, {localStorage.getItem('username')}</span>
        </div>
      </div>

      <div className="blog-form-container">
        <form onSubmit={handleSubmit} className="blog-form">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Enter blog post title"
            />
          </div>

          <div className="form-group">
            <label>Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              required
              rows="3"
              placeholder="Enter a brief excerpt for this blog post"
            />
          </div>

          <div className="form-group">
            <label>Featured Image URL</label>
            <div className="image-upload-container">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <div className="image-upload-controls">
                <button
                  type="button"
                  onClick={handleUploadButtonClick}
                  className="upload-image-btn"
                  disabled={uploading}
                  title="Upload image to Cloudinary (requires preset setup)"
                >
                  {uploading ? `Uploading... ${uploadProgress}%` : '📤 Upload Image'}
                </button>
                <span className="image-upload-separator">or</span>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Paste image URL here (works always)"
                  className="image-url-input"
                  required
                  title="You can paste any image URL here directly"
                />
              </div>
              <div className="image-upload-hint">
                💡 Tip: If upload fails, you can always paste the image URL directly. 
                Upload any image to Cloudinary manually and paste the URL here.
              </div>
              {formData.image && (
                <div className="image-preview">
                  <img src={formData.image} alt="Preview" onError={(e) => {
                    e.target.style.display = 'none';
                  }} />
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              placeholder="Enter category (e.g., Hair Care, Makeup, Tips)"
            />
          </div>

          <div className="form-group content-editor-group">
            <label>Content</label>
            {uploading && (
              <div className="editor-upload-progress">
                📤 Uploading image... {uploadProgress}%
              </div>
            )}
            <div className="tinymce-wrapper">
              <Editor
                apiKey="bhvqdinw22m8eaypoig4hij7r3eqh3h4wrjcv8leedw0xnzq"
                onInit={(evt, editor) => editorRef.current = editor}
                value={formData.content}
                onEditorChange={(content) => setFormData(prev => ({ ...prev, content: content }))}
                init={{
                  height: 500,
                  menubar: true,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help | image | link | code',
                  content_style: 'body { font-family:Inter,Arial,sans-serif; font-size:16px; color:#333; line-height:1.6; }',
                  images_upload_handler: handleEditorImageUpload,
                  images_reuse_filename: true,
                  automatic_uploads: true,
                  file_picker_types: 'image',
                  paste_data_images: true,
                  branding: false,
                  promotion: false,
                  skin: 'oxide',
                  content_css: 'default'
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="status-select"
            >
              <option value="DRAFT">Draft (Only visible in admin panel)</option>
              <option value="PUBLISHED">Published (Visible on blog page)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
              />
              <span>Featured Post</span>
            </label>
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate('/admin/panel')} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="save-btn">
              {isEditMode ? 'Update Blog Post' : 'Publish Blog Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogFormPage;

