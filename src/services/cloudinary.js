import axios from 'axios';

// Cloudinary Configuration
const CLOUDINARY_CLOUD_NAME = 'di4caiech';
const CLOUDINARY_UPLOAD_PRESET = 'salon_upload_preset'; // Create this unsigned preset in Cloudinary dashboard

/**
 * Upload image to Cloudinary using unsigned upload preset
 * @param {File} file - The image file to upload
 * @param {Function} onProgress - Callback function for upload progress (0-100)
 * @returns {Promise<string>} - The secure URL of the uploaded image
 */
export const uploadImageToCloudinary = async (file, onProgress) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'salon-blogs'); // Organize images in a folder

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (onProgress && progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            onProgress(percentCompleted);
          }
        },
      }
    );

    return response.data.secure_url; // Returns the image URL
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
      throw new Error(error.response.data?.error?.message || 'Upload failed');
    }
    throw error;
  }
};

