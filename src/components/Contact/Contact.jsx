import React, { useState } from 'react';
import './Contact.css';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function ContactUs() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!message) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // You can send the form data to your backend or handle it as needed
      // For this example, we'll display a success message
      setSuccessMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setErrors(newErrors);
    }
  };
  // const Longitude = -122.4194;
  // const Latitude = 37.7749;
  // const location = `${Latitude},${Longitude}`;
  // const customTitle = "AtoZ";

  // q=HQ+Location+Latitude,Longitude
  // q=${Latitude},${Longitude}

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=San+Francisco,CA&zoom=13`

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="elements">
        <div className="half map-container">
          <div className="contact-icons">
            <span className="phone"><LocalPhoneOutlinedIcon className='icon'/>(614) 256-8395</span>
            <span className="phone"><EmailOutlinedIcon className='icon' />a2z.glo.in@gmail.com</span>
            <span className="phone"><LocationOnOutlinedIcon className='icon' />San Francisco, CA</span>
          </div>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="Company HQ Location"
            src={mapSrc}
          ></iframe>
        </div>
        <div className="half form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-label">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-field"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div>
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div>
              <label className="form-label">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="input-field textarea"
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <div className="quote">
              <button type="submit" className="submit-button">
                Get A Quote
              </button>
            </div>
          </form>
          {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;