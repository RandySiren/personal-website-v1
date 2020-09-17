import { useState } from 'react';
import { motion } from 'framer-motion';

import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
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
                <div className={styles.HamburgerIcon}>
                    <HamburgerIcon toggleIcon={toggleIcon} active={isActive} />
                </div>
            </div>
        </>
    );
};

export default Header;
