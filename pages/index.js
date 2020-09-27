import Head from 'next/head';
import { useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Intro from '../containers/Intro/Intro';
import About from '../containers/About/About';
import TechStack from '../containers/TechStack/TechStack';
import Projects from '../containers/Projects/Projects';
import Contact from '../containers/Contact/Contact';

import styles from '../styles/Index.module.css';

const Index = () => {
    const [headerActive, setHeaderActive] = useState(true);
    const [sidebarActive, setSidebarActive] = useState(false);
    const toggleIcon = () => {
        setSidebarActive(!sidebarActive);
    };
    const onScroll = (e) => {
        if (window.pageYOffset < 100) {
            setHeaderActive(true);
        } else {
            if (e.deltaY < 0) {
                setHeaderActive(true);
            } else {
                setHeaderActive(false);
            }
        }
    };

    let classes = [styles.main, sidebarActive ? styles.Blur : ''];

    return (
        <div className={styles.container} onWheel={(e) => onScroll(e)}>
            <Head>
                <title>Mandeep Sran</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header
                isHeaderActive={headerActive}
                isSidebarActive={sidebarActive}
                setSidebarActive={toggleIcon}
            />
            <div
                onClick={(e) => {
                    setSidebarActive(false);
                }}
                className={classes.join(' ')}
            >
                <Intro />
                <About />
                <TechStack />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Index;
