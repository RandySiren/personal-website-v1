import styles from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const About = (props) => {
  return (
    <div className={styles.About} id='About'>
      <div className={styles.Pic}>
        <ScrollAnimation
          animateIn='animate__slideInLeft'
          duration={1.5}
          animateOnce={true}
        >
          <img className={styles.PicImg} src={'/images/Selfie.jpg'} />
        </ScrollAnimation>
      </div>
      <div className={styles.AboutText}>
        <ScrollAnimation
          animateIn='animate__slideInRight'
          duration={1.5}
          animateOnce={true}
        >
          <div className={styles.Title}>About Me</div>
          <div className={styles.Text}>
            <p>
              Hello! I'm Manny (as I usually go by), a software engineer based in
              Toronto, ON.
            </p>
            <p>
              I enjoy creating applications and products from
              scratch. Seeing the progress from a blank canvas to
              a finished product is my equivalent of artistry and
              it's been a my passion for over a decade now.
            </p>
            <p>
              I've graduated from Wilfrid Laurier
              University's Comp Sci. program and probably working at the last position on my LinkedIn. I've worked with various clients and personal connections
              creating meaningful products from websites for their
              business to automation scripts for their personal
              needs. At this point I've done a lot more so just ask me. :)
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default About;
