import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clone apple note</title>
        <meta
          name="description"
          content="Clone apple note with nextJs and tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </div>
  );
};

export default Home;
