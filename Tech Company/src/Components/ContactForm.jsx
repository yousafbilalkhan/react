import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send the data to a server
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formGroupStyle}>
        <label htmlFor="name" style={labelStyle}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="email" style={labelStyle}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="message" style={labelStyle}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
        />
      </div>
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  margin: '0 auto',
  border: '1px solid #fff',
  borderRadius: '8px',
};

const formGroupStyle = {
  marginBottom: '1rem'
};

const labelStyle = {
  display: 'block',
  marginBottom: '.5rem',
  fontWeight: 'bold'
};

const inputStyle = {
  width: '100%',
  padding: '.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const textareaStyle = {
  width: '100%',
  padding: '.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minHeight: '100px'
};

const buttonStyle = {
  width: '100%',
  padding: '.5rem 1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: 'black',
  color: '#fff',
  cursor: 'pointer'
};

export default ContactForm;
