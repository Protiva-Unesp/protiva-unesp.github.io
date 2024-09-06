import React from 'react';
import styles from './Content.module.css';

const Content: React.FC = () => {
    return (
        <div className={styles.content}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare leo
                lectus, in lobortis turpis tincidunt sed. Mauris scelerisque nulla vel
                dolor mollis faucibus ut ac quam. In id sapien eros. Nulla nibh augue,
                dictum non aliquet placerat, pretium eu est. Donec scelerisque faucibus
                fermentum. In gravida sed orci quis tempus. Vestibulum bibendum, leo sed
                consectetur tempus, sem urna dapibus tellus, eget rutrum sem turpis id
                neque.
            </p>
        </div>
    );
};

export default Content;
