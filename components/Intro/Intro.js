import { motion } from 'framer-motion';

import styles from './Intro.module.css';

const Intro = ({ color }) => {
    return (
        <div className={styles.Intro}>
            <div className={styles.TextContent}>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className={styles.HelloText}
                >
                    Hey, my name is
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className={styles.Name}
                >
                    Manny Sran.
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className={styles.Subheading}
                >
                    I'm a Full-Stack Engineer.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75 }}
                    className={styles.Description}
                >
                    Based in Toronto, ON with a focus on the JavaScript back to
                    front stack, who is also an avid Toronto Maple Leafs and
                    video game fanatic.
                </motion.p>
            </div>
        </div>
    );
};

export default Intro;
