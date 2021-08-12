import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import Layout from '../components/layout';

const Admin = () => {
  const { user } = useUser();

  return (
    <Layout title='Admin'>
      <h2>Admin area</h2>
      <a href='https://ucarecdn.com/5811785a-16eb-455a-9ad2-8e3cdaa5c282/PlatinumJubileeCommittee_MeetingNotes_20200803.pdf'>
        Meeting notes for 3rd Aug 2021
      </a>
      <br />
      <a href='https://ucarecdn.com/b7d02f18-9885-4cb9-8505-7b53f624bd7f/Grantapplication.docx'>
        Grant application
      </a>
    </Layout>
  );
};

export default withPageAuthRequired(Admin);
