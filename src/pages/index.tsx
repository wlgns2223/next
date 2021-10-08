import type { NextPage } from 'next'
import Link from "next/link";
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div >
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Hello World</p>
      <p className={styles.text}>Hello World</p>
      <Link  href="/kogi"><a className={styles.btn}>Kogi List</a></Link>
    </div>
  )
}

export default Home
