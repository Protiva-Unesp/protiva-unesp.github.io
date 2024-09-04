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
            <p>
                Proin sed mi vitae nibh feugiat sodales. Vestibulum quam sapien,
                tristique eget mauris ut, viverra vulputate arcu. Aenean semper, tellus
                in iaculis sollicitudin, diam lacus mattis felis, sit amet consequat
                neque tortor et mauris. Aenean mattis, mauris et tempor malesuada, ex
                erat accumsan augue, eu euismod velit ipsum vitae diam. Proin sit amet
                ante urna. Vestibulum nec erat nisi. Nunc vehicula justo id lectus
                tempor, nec tempor sem consectetur. Etiam luctus metus urna, eu
                tincidunt ligula dapibus ut. Duis vel ante vehicula, blandit mauris
                vitae, porttitor lacus. Etiam vel nunc dapibus, pretium elit a, congue
                ante. Mauris nec luctus quam. Fusce dictum porta risus et consequat.
                Proin euismod efficitur magna a sodales. Etiam eu nunc porta, pretium mi
                ut, eleifend justo.
            </p>
        </div>
    );
};

export default Content;
