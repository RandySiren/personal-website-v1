import { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { motion } from 'framer-motion';

import styles from './Header.module.css';

const Header = () => {
    const [isActive, setActive] = useState(false);

    const toggleIcon = () => {
        setActive(!isActive);
    };

    return (
        <>
            <div className={styles.Header}>
                <motion.p className={styles.Logo}>Logo</motion.p>
                <ul className={styles.NavItems}>
                    <motion.p>Click1</motion.p>
                    <motion.p>Click2</motion.p>
                    <motion.p>Click3</motion.p>
                </ul>
                <div className={styles.HamburgerMenu}>
                    <HamburgerMenu
                        isOpen={isActive}
                        menuClicked={toggleIcon}
                        color={'#64ffda'}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
