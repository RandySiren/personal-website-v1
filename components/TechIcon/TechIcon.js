import styles from './TechIcon.module.css';

const TechIcon = (props) => {
    return (
        <div className={styles.TechIcon}>
            <img src={props.address} />
            <p>{props.text}</p>
        </div>
    );
};

export default TechIcon;
