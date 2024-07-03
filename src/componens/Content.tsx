import React from 'react';
import useToggle from './useToggle';
import styles from './useToggle.module.css'
const Content: React.FC = () => {
    const [isToggled, toggle] = useToggle();

    return (
        <div className={styles.Content}>
            <h1>Custom Hook: useToggle</h1>
            <p>The toggle value is: {isToggled ? 'True' : 'False'}</p>
            <button onClick={toggle} className={styles.button}>Toggle</button>
        </div>
    );
}

export default Content;
