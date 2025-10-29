import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Time slots
  const allTimeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '20:00', label: '8:00 PM' }
  ];

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Compute available times based on selected date
  const getAvailableTimes = () => {
    if (!formData.date) {
      return allTimeSlots;
    }

    const today = getTodayDate();
    const isToday = formData.date === today;

    if (isToday) {
      const currentTime = getCurrentTime();
      return allTimeSlots.filter(slot => slot.value >= currentTime);
    }
    
    return allTimeSlots;
  };

  const availableTimes = getAvailableTimes();

  // Reset time when date changes if time is in the past
  useEffect(() => {
    if (formData.date) {
      const today = getTodayDate();
      if (formData.date === today && formData.time) {
        const currentTime = getCurrentTime();
        if (formData.time < currentTime) {
          setFormData(prev => ({ ...prev, time: '' }));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.date]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS - Update these values with your actual credentials
      const serviceId = 'service_u4l22j8';
      const templateId = 'template_gen0rad';
      const publicKey = 'rGfPjy7-itYX_H8zk';

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'venkataniharbillakurthi@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey
      );

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
    setSubmitStatus(null);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" onClick={handleClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Book Your Appointment</h2>
          <button className="close-button" onClick={handleClose}>
            ✕
          </button>
        </div>
        
        <form className="booking-form" onSubmit={handleSubmit}>
          {submitStatus === 'success' && (
            <div className="status-message success-message">
              ✓ Booking request sent successfully! You'll receive a confirmation shortly.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="status-message error-message">
              ✕ Failed to send booking request. Please try again later.
            </div>
          )}
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a service</option>
                <optgroup label="Hair Services">
                  <option value="hair-cut">Hair Cut</option>
                  <option value="hair-colour">Hair Colour</option>
                  <option value="hair-styling">Hair Styling</option>
                  <option value="hair-treatment">Hair Treatment</option>
                  <option value="hair-care-rituals">Hair Care Rituals</option>
                  <option value="hair-extensions">Hair Extensions</option>
                </optgroup>
                <optgroup label="Makeup Services">
                  <option value="light-party-makeup">Light & Party Makeup</option>
                  <option value="bridal-groom-makeup">Bridal & Groom Makeup</option>
                  <option value="hair-updos-saree-draping">Hair Updos & Saree Draping</option>
                  <option value="mehendi">Mehendi</option>
                </optgroup>
                <optgroup label="Nail Services">
                  <option value="nail-artistry">Nail Artistry</option>
                  <option value="manicure-pedicure">Manicure & Pedicure</option>
                  <option value="luxury-extensions">Luxury Extensions</option>
                </optgroup>
                <optgroup label="Skin & Body Services">
                  <option value="threading-waxing">Threading & Waxing</option>
                  <option value="bleach-detain">Bleach & De-Tan</option>
                  <option value="cleanup-facials">Clean-Up & Facials</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={getTodayDate()}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="time">Preferred Time *</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value="">Select time</option>
                {availableTimes.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Tell us about your preferences or special requests..."
            />
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="btn-cancel" 
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Book Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
