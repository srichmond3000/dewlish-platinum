import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';
import Layout from './components/layout';

const Admin = () => {
  const { user } = useUser();

  return (
    <Layout title='Admin'>
      <h2>Admin area</h2>
      <p>Name: {user.name}</p>
    </Layout>
  );
};

export default withPageAuthRequired(Admin);
