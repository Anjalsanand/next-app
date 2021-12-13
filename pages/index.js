import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from  'next/link'

export default function Home() {
  return (
    <div className={styles}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
    <Link href="/ninja"><a className={styles.btn} >See Ninja list</a></Link>
    </div>
  );
}
