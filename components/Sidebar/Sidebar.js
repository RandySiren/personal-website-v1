import styles from './Sidebar.module.css';

const Sidebar = (props) => {
    let classes = [styles.Sidebar];
    if (props.active) classes.push(styles.Active);

    return (
        <div className={classes.join(' ')}>
            {props.items.map((e, index) => (
                <div className={styles.Item} key={index}>
                    <p style={{ color: '#64ffda', textAlign: 'center' }}>
                        0{index + 1}.
                    </p>
                    {e}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
