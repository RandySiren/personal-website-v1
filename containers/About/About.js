import styles from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const About = (props) => {
    return (
        <div className={styles.About}>
            <div className={styles.Pic}>
                <ScrollAnimation
                    animateIn='animate__slideInLeft'
                    duration={1.5}
                    animateOnce={true}
                >
                    Pic
                </ScrollAnimation>
            </div>
            <div className={styles.AboutText}>
                <ScrollAnimation
                    animateIn='animate__slideInRight'
                    duration={1.5}
                    animateOnce={true}
                >
                    <div className={styles.Title}>01. About Me</div>
                    <div className={styles.Text}>
                        <p>
                            Hello! I'm Manny, a software engineer based in
                            Toronto, ON.
                        </p>
                        <p>
                            This is my website I am currently working on and is
                            pretty cool tbh.This is my website I am currently
                            working on and is pretty cool tbh.This is my website
                            I am currently working on and is pretty cool tbh.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default About;
