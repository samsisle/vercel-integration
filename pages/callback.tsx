import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '@components/layout';
import styles from '@styles/Home.module.css';

const Callback: NextPage = () => {
  const router = useRouter();

  console.log('[test] router =', router);

  return (
    <Layout>
      <h1 className={styles.title}>Vercel Integration: Callback Page</h1>
      <p className={styles.description}>
        This example Vercel Integration tests Webhooks.
      </p>
      <div className={styles.grid}>
        <div className={styles.card} onClick={() => {}}>
          <h2>Redirect</h2>
          <p>Redirect me back to Vercel.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Callback;
