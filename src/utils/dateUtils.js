/**
 * Date utility functions - Always use user's local timezone
 */

/**
 * Convert date string to local datetime-local format (YYYY-MM-DDTHH:mm)
 * @param {string|Date} dateInput - Date string or Date object
 * @returns {string} Formatted string in local timezone
 */
export const toLocalDateTimeString = (dateInput) => {
  if (!dateInput) return '';
  const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
  // Always use local timezone components
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

/**
 * Get current local datetime for datetime-local input
 * @returns {string} Current date/time in user's local timezone (YYYY-MM-DDTHH:mm)
 */
export const getCurrentLocalDateTime = () => {
  const now = new Date(); // Always in user's local timezone
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

/**
 * Format date for display in user's local timezone
 * @param {string} dateString - ISO date string
 * @param {object} options - Optional formatting options
 * @returns {string} Formatted date string
 */
export const formatLocalDate = (dateString, options = {}) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone // User's local timezone
  };
  return date.toLocaleDateString('en-US', { ...defaultOptions, ...options });
};

/**
 * Format date with time in user's local timezone
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date/time string
 */
export const formatLocalDateTime = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone // User's local timezone
  });
};


