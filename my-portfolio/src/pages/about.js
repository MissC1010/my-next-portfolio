import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles["about-title"]}>About</h1>
        <p className={styles.text}>
          My name is Celina I am student web developer. I am very passionate
          about the work I do and the endless possibilities of the things I can
          create. Having the ability to take a vision and bring it to life
          through code is a rewarding experience. I find alot of joy in
          discovering innovative solutions to complex problems and constantly
          challenging myself to improve my skills. My creativity is unleashed
          through my work, allowing me to express myself in a unique and
          meaningful way. I am very grateful for the opportunity to work in a
          field that pushes me to be better and allows me to make a positive
          impact through my creations. I have been doing a bootcamp on full
          stack web development. Prior to this i have no work history in the
          field of coding.
        </p>
      </div>
    </>
  );
}
