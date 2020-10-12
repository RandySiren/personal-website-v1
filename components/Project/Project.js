import styles from './Project.module.css';

const Project = (props) => {
    return (
        <div className={styles.Project}>
            <a href={props.url} target='_blank'>
                <img src={props.src} />
            </a>
            <div className={styles.Info}>
                <div className={styles.Title}>{props.title}</div>
                <div className={styles.Description}>{props.description}</div>
                <div className={styles.Languages}>
                    {props.languages.map((language, index) => (
                        <span key={index} className={styles.Language}>
                            {language}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
