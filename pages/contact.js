import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from './components/layout';
import styles from './contact.module.scss';

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
        .then(() => setSubmitted(false))
        .then(() => setFormData({ name: '', email: '', message: '' }))
        .then(() => router.push('/thankyou'))
        .catch((error) => console.log(`Error: ${error}`));
    }
  }, [errors, formData, submitted, router]);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const validate = (formData) => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = 'Name required';
    }
    if (!formData.email) {
      formErrors.email = 'Email required';
    }
    if (!formData.message) {
      formErrors.message = 'Message required';
    }

    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setErrors(validate(formData));
    setSubmitted(true);
    e.preventDefault();
  };

  return (
    <Layout title='Dewlish Platinum - Contact'>
      <h2>Contact Us</h2>
      <span>
        Enter your details and message and we&apos;ll get back to you, or email
        us at{' '}
        <a href='mailto:info@dewlishplatinum.org'>info@dewlishplatinum.org</a>
      </span>
      {/* This form is just to allow the Netlify bot to find the netlfiy attribute */}
      <form name='contact' netlify netlify-honeypot='bot-field' hidden>
        <input type='text' name='name' />
        <input type='email' name='email' />
        <textarea name='message'></textarea>
      </form>

      <form name='contact' netlify method='POST' onSubmit={handleSubmit}>
        <input type='hidden' name='form-name' value='contact' />
        <input type='text' name='bot-field' className={styles.hidden} />
        <div className={styles.form}>
          <label htmlFor='name' className={styles.label}>
            Name *
          </label>
          <input
            id='name'
            type='text'
            name='name'
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}

          <label htmlFor='email' className={styles.label}>
            Email *
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}

          <label htmlFor='message' className={styles.label}>
            Message *
          </label>
          <textarea
            id='message'
            name='message'
            rows='4'
            cols='50'
            className={styles.input}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message}</span>
          )}

          <button type='submit' className={styles.button}>
            Send
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
