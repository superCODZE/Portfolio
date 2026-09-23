import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef(null);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm('service_4q0v4rd', 'template_qyw4hvq', form.current, {
        publicKey: 'SyIB-0VcBuoCiOt1C',
      })
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setStatus('error');
      });
  };

  return (
    <div className="contact-form">
      <h3>Contact Form</h3>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button className="cursor-target" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
        {status === 'success' && <p>Message sent successfully!</p>}
        {status === 'error' && <p>Something went wrong, please try again.</p>}
      </form>
    </div>
  );
}

export default ContactUs;