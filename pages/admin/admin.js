import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import Layout from '../components/layout';

const Admin = () => {
  const { user } = useUser();

  return (
    <Layout title='Admin'>
      <h2>Admin area</h2>
      <h3>Minutes of meetings</h3>
      <a href='https://ucarecdn.com/1cd69ac8-852c-472e-9ecd-96a2e858bd2d/PlatinumJubileeCommittee_MeetingNotes_20211019.pdf'>
        19th Oct 2021
      </a>
      <br />
      <br />
      <a href='https://ucarecdn.com/11ddc131-6590-46c0-8950-1e733174bf3e/CommitteeMeetingMinutes24thAugust2021.pdf'>
        24th Aug 2021
      </a>
      <br />
      <br />
      <a href='https://ucarecdn.com/5811785a-16eb-455a-9ad2-8e3cdaa5c282/PlatinumJubileeCommittee_MeetingNotes_20200803.pdf'>
        3rd Aug 2021
      </a>
      <h3>Documents</h3>
      <p>
        <a href='https://ucarecdn.com/b7d02f18-9885-4cb9-8505-7b53f624bd7f/Grantapplication.docx'>
          Grant application
        </a>
      </p>
      <p>
        <a href='https://ucarecdn.com/b0a192ea-0c06-42b3-8d03-38c5c33392ef/Constitution.pdf'>
          Constitution
        </a>
      </p>
      <p>
        <a href='https://ucarecdn.com/3842fbcd-4dd8-4dfb-be32-9b4c5c8f34c4/Insurance.pdf'>
          Insurance
        </a>
      </p>
    </Layout>
  );
};

export default withPageAuthRequired(Admin);
