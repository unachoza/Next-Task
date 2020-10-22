import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Online Skills Assesments</h1>
        <div className={styles.grid}>
          <a href="https://www.hackerrank.com/skills-verification" target="_blank" className={styles.card}>
            <h3>Hacker Rank &rarr;</h3>
            <p>Multiple Tests</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=axxKNJ8MV_g&list=PLVcEZG2JPVhdJVopX9jAM8PUCaC7qKOgp&ab_channel=WomenWhoCode"
            target="_blank"
            className={styles.card}
          >
            <h3>Women Who Code &rarr;</h3>
            <p>Frontend Playlist</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=vJyRJE0g6KM&list=PLVcEZG2JPVhcGbI_J7eaIy4PbKyMh3SQc&ab_channel=WomenWhoCode"
            target="_blank"
            className={styles.card}
          >
            <h3>Women Who Code &rarr;</h3>
            <p>Algo and Interview Playlist</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=l_YDH3-E7mA&list=PLVcEZG2JPVhcTOa5eBp6TYucuon-aXgWf&ab_channel=WomenWhoCode"
            target="_blank"
            className={styles.card}
          >
            <h3>Women Who Code &rarr;</h3>
            <p>Code of Social Good</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
// how did you decide what features to prioritize and which to discuss ?
//   how did you handle your coworkers not liking your idea ? What conversations did you facilitate ?
// Check company values
// Always respond with STAR METHODS
// Taxonomy is the science of naming, describing and classifying organisms
