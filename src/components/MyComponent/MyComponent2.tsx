import {FC} from 'react';
import styles from './styles/MyComponent.module.css'
type MyComponentProopType2 = { text:string }
const MyComponent2:FC<MyComponentProopType2> = ({text}) => {
    return (
        <div className={styles.target}>{text}</div>
    );
};

export default MyComponent2;