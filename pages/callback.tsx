import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '@components/layout'
import styles from '@styles/Home.module.css'

const Callback: NextPage = () => {
  const router = useRouter()

  return (
    <Layout>
      <h1 className={styles.title}>Vercel Integration: Callback Page</h1>
      <p className={styles.description}>
        This example Vercel Integration tests Webhooks.
      </p>
      <div className={styles.grid}>
        <a href={`${router.query.next}`} className={styles.card}>
          <h2>Redirect to Vercel &rarr;</h2>
          <p>Redirect to Vercel so finish installing the Vercel Integration.</p>
        </a>
      </div>
    </Layout>
  )
}

export default Callback
