import Layout from '../components/layout';
import styles from './quiz.module.scss';

const Quiz = () => (
  <Layout title='Quiz'>
    <h2 className={styles.heading}>Jubilee Quiz</h2>
    <p>
      Welcome to the Dewlish Platinum Jubilee 2022 Quiz! Hopefully you’ll find
      it challenging and fun with at least a few of the questions being
      impervious to a Google search.
    </p>
    <p>
      £2 per entry. Ask any committee member for a question form, or Phil
      (contact details below).
    </p>
    <p>
      Answers to Phil Cooper, 3 Manor Close, Dewlish, DT2 7SB by 31st May 2022
      (or email ktnphil@btinternet.com). £20 prize for the winner (name will be
      announced in the Village News).
    </p>
  </Layout>
);

export default Quiz;
