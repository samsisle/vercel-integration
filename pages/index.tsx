import type { NextPage } from 'next';
import Layout from '@components/layout';
import styles from '@styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Vercel Integration: Home Page</h1>
      <p className={styles.description}>
        This example Vercel Integration tests Webhooks.
      </p>
      <div className={styles.grid}>
        <a
          href='https://github.com/samsisle/vercel-integration'
          className={styles.card}
        >
          <h2>Link to Repo &rarr;</h2>
          <p>Link to the source code for this Vercel Integration.</p>
        </a>
      </div>
    </Layout>
  );
};

export default Home;
