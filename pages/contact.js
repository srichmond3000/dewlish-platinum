import Layout from './components/layout';
import styles from './contact.module.scss';

const Contact = () => {
  return (
    <Layout title='Dewlish Platinum - Contact'>
      <p>Enter your details and message and we will get back to you.</p>

      <form name='contact' method='POST' data-netlify='true' action='/thankyou'>
        <div className={styles.form}>
          <label htmlFor='name' className={styles.label}>
            Name
          </label>
          <input id='name' type='text' name='name' className={styles.input} />

          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className={styles.input}
          />

          <label htmlFor='message' className={styles.label}>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows='4'
            cols='50'
            className={styles.input}
          />

          <button type='submit' className={styles.button}>
            Send
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
