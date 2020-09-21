import styles from './TechStack.module.css';

import TechIcon from '../../components/TechIcon/TechIcon';

const TechStack = () => {
    return (
        <div className={styles.TechStack}>
            <div className={styles.Title}>Technology Stack</div>
            <div className={styles.Text}>
                Here's a list of most of the technologies I've worked with
                before:
            </div>
            <div className={styles.TechIcons}>
                <TechIcon address='/svg/html.svg' text='HTML' />
                <TechIcon address='/svg/css.svg' text='CSS' />
                <TechIcon address='/svg/js.svg' text='JavaScript' />
                <TechIcon address='/svg/ts.svg' text='TypeScript' />
                <TechIcon address='/svg/c.svg' text='C Language' />
                <TechIcon address='/svg/java.svg' text='Java' />
                <TechIcon address='/svg/python.svg' text='Python' />
                <TechIcon address='/svg/node.svg' text='Node.js' />
                <TechIcon address='/svg/react.svg' text='React' />
                <TechIcon address='/svg/mongodb.svg' text='MongoDB' />
                <TechIcon address='/svg/graphql.svg' text='GraphQL' />
                <TechIcon address='/svg/firebase.svg' text='Firebase' />
                <TechIcon address='/svg/linux.png' text='Linux/GNU' />
                <TechIcon address='/svg/git.svg' text='Git' />
            </div>
        </div>
    );
};

export default TechStack;
