import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <p>
                    Built from scratch by{' '}
                    <a href='https://github.com/randysiren/'>Mandeep Sran</a>
                </p>
                <p>
                    Design inspired by{' '}
                    <a href='https://github.com/bchiang7/'>Brittany Chang</a>{' '}
                </p>
                <p>Made with ♥ using Next.js</p>
            </footer>
        </>
    );
};

export default Footer;
