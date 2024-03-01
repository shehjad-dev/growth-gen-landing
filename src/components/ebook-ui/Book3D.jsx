import React from 'react';
import styles from './Book3D.module.css'; // Import the CSS module

const Book3D = () => {
    return (
        <div className={styles.bookContainer}>
            <div className={styles.book}>
                <div className={styles.front}>
                    <p>Front Cover</p>
                </div>
                <div className={styles.spine}></div>
                <div className={styles.back}></div>
            </div>
        </div>
    );
};

export default Book3D;