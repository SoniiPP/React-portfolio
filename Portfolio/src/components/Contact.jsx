import  { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email address is invalid';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} />
          {errors.message && <span>{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
