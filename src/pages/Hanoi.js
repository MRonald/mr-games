import React from "react";
import styles from '../styles/pages/Hanoi.module.css';

export default function Hanoi() {
    return (
        <div className={styles.container}>
            <div className={styles.gameWrapper}>
                <div className={styles.game}>
                    <div className={`${styles.bar} ${styles.bar1}`}>
                        <div className={`${styles.block} ${styles.block1}`}></div>
                    </div>
                    <div className={`${styles.bar} ${styles.bar2}`}></div>
                    <div className={`${styles.bar} ${styles.bar3}`}></div>
                </div>
                <div className={styles.base}></div>
            </div>
        </div>
    );
}
