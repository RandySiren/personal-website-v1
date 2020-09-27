import HamburgerIcon from 'react-hamburger-menu';
import { motion } from 'framer-motion';

import Sidebar from '../Sidebar/Sidebar';
import styles from './Header.module.css';

const Header = (props) => {
    let classesLogo = [styles.Logo, props.isSidebarActive ? styles.Blur : ''];
    let classesHeader = [
        styles.Header,
        props.isHeaderActive ? styles.ActiveHeader : '',
    ];
    const items = [
        <span>
            <a href='#About'>About</a>
        </span>,
        <span>
            <a href='#TechStack'>Tech Stack</a>
        </span>,
        <span>
            <a href='#Projects'>Projects</a>
        </span>,
        <span>
            <a href='#Contact'>Contact</a>
        </span>,
    ];
    return (
        <>
            <div className={classesHeader.join(' ')}>
                <motion.p className={classesLogo.join(' ')}>Logo</motion.p>
                <ul className={styles.NavItems}>
                    {items.map((e, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index / 4, duration: 0.75 }}
                            className={styles.NavItem}
                            key={index}
                        >
                            <span style={{ color: '#64ffda' }}>
                                0{index + 1}.
                            </span>{' '}
                            {e}
                        </motion.div>
                    ))}
                </ul>
                <div className={styles.HamburgerIcon}>
                    <HamburgerIcon
                        isOpen={props.isSidebarActive}
                        menuClicked={props.setSidebarActive}
                        color={'#64ffda'}
                    />
                </div>
            </div>
            <Sidebar active={props.isSidebarActive} items={items} />
        </>
    );
};

export default Header;
