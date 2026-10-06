import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only: nothing is sent anywhere.
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section alt">
      <div className="container narrow">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
          <textarea name="message" rows="4" placeholder="Message" value={form.message} onChange={handleChange} required />
          <button type="submit" className="btn">Send message</button>
          {sent && <p className="success">Thanks! This is a demo, so your message was not sent.</p>}
        </form>
      </div>
    </section>
  );
}
