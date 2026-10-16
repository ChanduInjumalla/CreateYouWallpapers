/* ============================================================
   BUSINESS CONFIGURATION
   All verified business data and configurable values.
   ============================================================ */

export const BUSINESS = {
  name: 'CreateYouWallpapers',
  tagline: 'Premium Wallpaper & Wall Panel Solutions',
  city: 'Hyderabad',
  state: 'Telangana',
  country: 'India',
  
  /* Contact — update with verified details */
  phone: '+91-XXXXXXXXXX',        // TODO: Add verified phone
  whatsapp: '91XXXXXXXXXX',       // TODO: Add verified WhatsApp (digits only)
  email: 'info@createyouwallpapers.com', // TODO: Verify email
  
  /* Address — update when verified */
  address: {
    street: '',                   // TODO: Add verified address
    area: '',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '',
    full: 'Hyderabad, Telangana, India',
  },

  /* Social — update with real URLs */
  social: {
    instagram: '#',   // TODO: Add real Instagram URL
    facebook: '#',    // TODO: Add real Facebook URL
    youtube: '#',     // TODO: Add real YouTube URL
  },

  /* Domain — update for production */
  domain: 'https://createyouwallpapers.com',  // TODO: Set production domain
  
  /* Analytics — add IDs when available */
  analytics: {
    gaId: '',         // TODO: Add Google Analytics ID
    gtmId: '',        // TODO: Add Google Tag Manager ID
  },

  /* Hours — update when verified */
  hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
};

export const getPhoneLink = () => `tel:${BUSINESS.phone}`;
export const getWhatsAppLink = (message = 'Hi, I am interested in your wallpaper and wall panel services.') =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
export const getEmailLink = () => `mailto:${BUSINESS.email}`;
