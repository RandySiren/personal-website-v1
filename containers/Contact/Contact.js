import styles from './Contact.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

import TechIcon from '../../components/TechIcon/TechIcon';
const Contact = () => {
    return (
        <ScrollAnimation animateIn='animate__slideInLeft' animateOnce={true}>
            <div className={styles.Contact} id='Contact'>
                <div className={styles.Title}>Contact</div>
                <div className={styles.Text}>
                    I currently am looking for a full-time position in a full
                    stack or back end career path, if you're interested in
                    reaching out my inbox is always open. Whether it's a
                    question about any of my projects, work experience of this
                    website itself please don't hesitate to get in touch!{' '}
                </div>
                <div className={styles.Icons}>
                    <a
                        href='https://www.github.com/RandySiren/'
                        target='_blank'
                    >
                        <TechIcon
                            text='RandySiren'
                            filter={true}
                            address='/svg/github.svg'
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/mandeep-sran-8198181b5/'
                        target='_blank'
                    >
                        <TechIcon
                            text='Mandeep Sran'
                            filter={true}
                            address='/svg/linkedin.svg'
                        />
                    </a>
                    <a href='mailto:mandeepsran@protonmail.com' target='_blank'>
                        <TechIcon
                            text='mandeepsran@protonmail.com'
                            filter={true}
                            address='/svg/email.svg'
                        />
                    </a>
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default Contact;
