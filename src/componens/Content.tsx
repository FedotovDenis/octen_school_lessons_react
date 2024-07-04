import React from 'react';
import useToggle from './useToggle';
import usePrevious from './usePrevious';
import styles from './style.module.css';
const Content: React.FC = () => {
    const [isToggled, toggle] = useToggle();
    const previousToggled = usePrevious(isToggled);

    return (
        <div className={styles.App}>
            <h1>Custom Hook:</h1>
            <p>The toggle is: {isToggled ? 'True' : 'False'}</p>
            <p>The previous toggle: {previousToggled !== undefined ? (previousToggled ? 'True' : 'False') : 'Undefined'}</p>
            <button onClick={toggle} className={styles.Button}>Toggle</button>
        </div>
    );
}

export default Content;
