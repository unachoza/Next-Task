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
          Welcome to <a href="">Arianna's Large Enterance</a>
        </h1>
        <div className={styles.grid}>
          <a href="/assessments" className={styles.card}>
            <h3>Assesments &rarr;</h3>
            <p>Right Here</p>
          </a>

          <a
            href="https://computer-science-study-dashboard.vercel.app/"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3>See Progress &rarr;</h3>
            <p>Dashboard</p>
          </a>

          <a
            href="https://unachoza.github.io/Thoughts-on-Algorithms-DataStructures/"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3>Alogrithm Practice &rarr;</h3>
            <p>See the code</p>
          </a>
          <a
            src="https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOBuUt6m1FnW"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h3>Harvard CS Lectures &rarr;</h3>
            <p>Private Youtube Playlist</p>
          </a>
          <a src="https://github.com/WomenWhoCode/wwcsf-algos" className={styles.card} rel="noopener noreferrer">
            <h3>Women Who Code SF&rarr;</h3>
            <p>Github Repo of Study Resources</p>
          </a>
          <a src="https://www.coursera.org/in-progress" className={styles.card} rel="noopener noreferrer">
            <h3>Coursera Specializations&rarr;</h3>
            <p>Data Structures and Algorithms</p>
            <p>Algorithms</p>
            <p>Discrete Mathematics for Computer Science</p>
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
