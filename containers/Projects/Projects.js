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
                        url={'https://osrs-gear.herokuapp.com'}
                    />
                    <Project
                        title='TutorHub'
                        description='Social platform for tutors and students for Ontario universities to teach specific courses and find students/tutors. Includes tutor verification and fully fledged social media profiles.
                        '
                        languages={['JavaScript', 'Express/Node.js']}
                        src={'/images/tutorhub.png'}
                    />
                    <Project
                        title='Library Server-Client App'
                        description='Server and Client setup to add books to library to a centralized server with a detailed and user friendly GUI. Uses Swing and Socket API.'
                        languages={['Java']}
                        src={'/images/client-server-app.png'}
                        url={'https://github.com/RandySiren/CP372-A1'}
                    />
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default Projects;
