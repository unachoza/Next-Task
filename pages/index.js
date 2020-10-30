import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

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
          <a href="/assessments" className={styles.card}>
            <h3>Assesments &rarr;</h3>
            <p>Right Here</p>
          </a>

          <a className={styles.card}>
            <h3>See Progress &rarr;</h3>
            <p>Dashboard</p>
          </a>

          <a
            href="https://unachoza.github.io/Thoughts-on-Algorithms-DataStructures/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Alogrithm Practice &rarr;</h3>
            <p>See the code</p>
          </a>
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
