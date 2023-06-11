import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles["about-title"]}>Home</h1>
        <p className={styles.text}>
          My name is Celina. i am new to tech world and this is a lil about me.
        </p>
      </div>
    </>
  );
}
