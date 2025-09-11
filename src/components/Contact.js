import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-description">
              Ready to implement strategic AI governance and security enablement in your organization? 
              I'd love to discuss how I can help you navigate large-scale technology deployments, 
              stakeholder alignment, and responsible AI development across global enterprise environments.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">alinacker@live.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/alixandraacker/" target="_blank" rel="noopener noreferrer" className="contact-value contact-link">
                  linkedin.com/in/alixandraacker/
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-value">London, United Kingdom and New York, USA | Available Worldwide</span>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
