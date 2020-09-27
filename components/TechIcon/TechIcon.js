import styles from './TechIcon.module.css';

const TechIcon = (props) => {
    return (
        <div className={styles.TechIcon}>
            <img
                className={props.filter ? styles.Recolor : ''}
                src={props.address}
            />
            <p>{props.text}</p>
        </div>
    );
};

export default TechIcon;
