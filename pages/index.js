import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arianna </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Arianna's Typescript Task Mate!</a>
        </h1>
        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>First Card &rarr;</h3>
            <p>Right Here</p>
          </a>

          <a className={styles.card}>
            <h3>Second Card &rarr;</h3>
            <p> More interactive stuff!</p>
          </a>

          <a className={styles.card}></a>

          <a className={styles.card}></a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
