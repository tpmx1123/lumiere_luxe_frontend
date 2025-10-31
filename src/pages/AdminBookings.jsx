import React, { useState, useEffect } from 'react';
import { bookingAPI } from '../services/api';
import './AdminBookings.css';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'unread'

  useEffect(() => {
    fetchBookings();
  }, [filter]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const data = filter === 'unread' 
        ? await bookingAPI.getUnreadBookings()
        : await bookingAPI.getAllBookings();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await bookingAPI.markAsRead(id);
      fetchBookings();
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await bookingAPI.deleteBooking(id);
        fetchBookings();
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleExportCSV = () => {
    if (bookings.length === 0) {
      alert('No bookings to export');
      return;
    }

    // Create CSV headers
    const headers = ['Name', 'Email', 'Phone', 'Service', 'Date', 'Time', 'Message', 'Status', 'Received Date'];
    
    // Create CSV rows
    const rows = bookings.map(booking => [
      booking.name || '',
      booking.email || '',
      booking.phone || '',
      booking.serviceName || '',
      booking.date || '',
      booking.time || '',
      (booking.message || '').replace(/"/g, '""'), // Escape quotes for CSV
      booking.isRead ? 'Read' : 'Unread',
      formatDate(booking.createdAt)
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    // Create Blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `bookings_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <div className="admin-bookings-loading">Loading...</div>;
  }

  const unreadCount = bookings.filter(b => !b.isRead).length;
  const totalCount = bookings.length;

  return (
    <div className="admin-bookings">
      <div className="admin-bookings-header">
        <h2>📋 Booking Requests</h2>
        <div className="booking-header-actions">
          <div className="booking-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({totalCount})
            </button>
            <button 
              className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
              onClick={() => setFilter('unread')}
            >
              Unread ({unreadCount})
            </button>
          </div>
          <button 
            className="export-csv-btn"
            onClick={handleExportCSV}
            title="Export bookings to Excel/CSV"
          >
            <span>📥</span>
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="bookings-table-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Date & Time</th>
              <th>Message</th>
              <th>Received</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="9" className="no-bookings">
                  No bookings found
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking.id} className={!booking.isRead ? 'unread-booking' : ''}>
                  <td>
                    {!booking.isRead ? (
                      <span className="badge unread-badge">NEW</span>
                    ) : (
                      <span className="badge read-badge">Read</span>
                    )}
                  </td>
                  <td><strong>{booking.name}</strong></td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td className="service-cell">{booking.serviceName}</td>
                  <td className="datetime-cell">
                    <div className="date-value">{booking.date}</div>
                    <div className="time-value">{booking.time}</div>
                  </td>
                  <td className="message-cell">
                    {booking.message ? (
                      <div className="message-text">{booking.message}</div>
                    ) : (
                      <em className="no-message">No message</em>
                    )}
                  </td>
                  <td className="received-cell">
                    {formatDate(booking.createdAt)}
                  </td>
                  <td>
                    <div className="booking-actions">
                      {!booking.isRead && (
                        <button 
                          onClick={() => handleMarkAsRead(booking.id)}
                          className="mark-read-btn"
                          title="Mark as read"
                        >
                          ✓
                        </button>
                      )}
                      <button 
                        onClick={() => handleDelete(booking.id)}
                        className="delete-btn"
                        title="Delete booking"
                      >
                        ✕
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookings;

