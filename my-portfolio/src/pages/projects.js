import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles["projects-title"]}>Projects</h1>
        <p className={styles["projects-description"]}>These are my projects:</p>
        <ul className={styles["projects-list"]}>
          <li>
            <a
              href="https://github.com/MissC1010/Hangman-game"
              className={styles["project-link"]}
            >
              Hangman game
            </a>
          </li>
          <li>
            <a
              href="https://react-app1010.herokuapp.com/"
              className={styles["project-link"]}
            >
              Cash Balance Calculator
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
