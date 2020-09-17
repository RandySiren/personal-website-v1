import Head from 'next/head';

import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Footer from '../components/Footer/Footer';

import styles from '../styles/Index.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Mandeep Sran</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <div className={styles.main}>
                <Intro />
                <Intro />
            </div>
            <Footer />
        </div>
    );
}
