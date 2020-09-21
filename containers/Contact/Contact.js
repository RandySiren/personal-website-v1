import styles from './Contact.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {
    return (
        <ScrollAnimation animateIn='animate__slideInLeft'>
            <div className={styles.Contact}>
                <div className={styles.Title}>Contact</div>
                <div className={styles.Text}>
                    I currently am looking for a full-time position in a full
                    stack or back end career path, if you're interested in
                    reaching out my inbox is always open. Whether it's a
                    question about any of my projects, work experience of this
                    website itself please don't hesitate to get in touch!{' '}
                </div>
                <div className={styles.Icons}></div>
            </div>
        </ScrollAnimation>
    );
};

export default Contact;
