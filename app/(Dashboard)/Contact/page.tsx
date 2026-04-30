// app/contact/page.tsx
'use client';

import { useState } from 'react';
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been received. We will get back to you shortly.');
    // TODO: In production, integrate with Formspree, EmailJS, or your backend
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920)',
        }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <AnimatedSection animation="fadeInUp">
            <h1>Get in Touch</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={150}>
            <p>Ready to build with excellence? Let's discuss your project.</p>
          </AnimatedSection>
        </div>
      </section>

      <PageSection>
        <div className="contact-container">

          {/* Contact Form */}
          <AnimatedSection animation="fadeInUp" className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project or how we can assist you..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="slideInRight" delay={200} className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-item">
              <strong>Head Office</strong>
              <p>
                No. 1 Indus Close, off Euphrates Street,<br />
                off Aguiyi Ironsi Street, Maitama,<br />
                Abuja, Nigeria.
              </p>
            </div>

            <div className="info-item">
              <strong>Email</strong>
              <p>
                <a href="mailto:buildmaxinvestmentlimited@gmail.com">
                  buildmaxinvestmentlimited@gmail.com
                </a>
              </p>
            </div>

            <div className="info-item">
              <strong>Phone Numbers</strong>
              <p>
                0706 089 6015<br />
                0803 311 4612<br />
                0808 039 0137
              </p>
            </div>

            <div className="info-item">
              <strong>Website</strong>
              <p>www.BuildMaxinvestment.com</p>
            </div>

            <div className="map-placeholder">
              <p>📍 Maitama, Abuja</p>
            </div>
          </AnimatedSection>

        </div>
      </PageSection>
    </>
  );
}