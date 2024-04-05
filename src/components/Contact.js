import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for Contact component
import emailjs from 'emailjs-com'; // Import EmailJS library

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_afztvvt', 'template_072w2ol', formData, 'Pami')
      .then((response) => {
        console.log('Email sent:', response.status, response.text);
        alert('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error('Error sending email:', error);
        alert('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <div id="contact" className="section">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
