import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact</h1>
        <p className={styles.description}>
          You can contact me at celina.indhur@gmail.com,
        </p>
        <p className={styles.description}>My Contact number: +02 000 0000</p>
        <p className={styles.description}>Address: 01 Lane Road</p>
      </div>
    </>
  );
}
