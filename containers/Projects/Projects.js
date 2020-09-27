import styles from './Projects.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

import Project from '../../components/Project/Project';

const Projects = () => {
    return (
        <ScrollAnimation
            animateIn='animate__slideInLeft'
            animateOnce={true}
            style={{ width: '90%' }}
        >
            <div className={styles.Projects} id='Projects'>
                <div className={styles.Title}>Personal Projects</div>
                <div className={styles.ProjectsDiv}>
                    <Project
                        title='OSRS Gear'
                        description='OSRS Gear allow users to create their own custom gear setups and share with URL shortened profiles in a clean and completely unique UI/UX. Over 10000 stored profiles.
                        '
                        languages={['TypeScript', 'React', 'OSRSBox API']}
                        src={'/images/osrs-gear.png'}
                    />
                    <Project
                        title='TutorHub'
                        description='Social platform for tutors and students for Ontario universities to teach specific courses and find students/tutors. Includes tutor verification and fully fledged social media profiles.
                        '
                        languages={['TypeScript', 'React', 'OSRSBox API']}
                        src={'/images/tutorhub.png'}
                    />
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default Projects;
