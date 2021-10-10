import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>kogi hello</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Hello World</p>
        <p className={styles.text}>Hello World</p>
        <Link href="/kogi">
          <a className={styles.btn}>Kogi List</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
