import styles from './HamburgerIcon.module.css';

const HamburgerIcon = ({ active, loading, toggleIcon }) => {
    let classTop = [
        styles.Top,
        active ? styles.active : '',
        loading ? styles.loading : '',
    ];
    let classCenter = [
        styles.Center,
        active ? styles.active : '',
        loading ? styles.loading : '',
    ];
    let classBottom = [
        styles.Bottom,
        active ? styles.active : '',
        loading ? styles.loading : '',
    ];
    return (
        <div onClick={toggleIcon} style={{ position: 'relative' }}>
            <div className={classTop.join(' ')} />
            <div className={classCenter.join(' ')} />
            <div className={classBottom.join(' ')} />
        </div>
    );
};

export default HamburgerIcon;
