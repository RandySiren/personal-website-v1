import styles from './Footer.module.css';

const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<p>
					Built from scratch by{' '}
					<a href='https://github.com/randysiren/personal-website-v1' target='_blank'>Mandeep Sran</a>
				</p>
				<p>
					Design inspired by{' '}
					<a href='https://github.com/bchiang7/' target='_blank'>Brittany Chang</a>{' '}
				</p>
				<p>Made with ♥ using Next.js</p>
			</footer>
		</>
	);
};

export default Footer;
