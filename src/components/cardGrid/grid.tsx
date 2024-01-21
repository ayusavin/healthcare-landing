import styles from './grid.module.scss'
import {ReactElement, ReactNode} from 'react';
import left from '/pages/homepage/cards/images/ic_left_drip.png';
import right from '/pages/homepage/cards/images/ic_right_drip.png';

const CardGrid = (props: {
    title?: string,
    description?: string,
    children: ReactNode | ReactNode[],
    button?: ReactElement,
    type?: 'left' | 'right',
}) => {

    return <>
        <section className={styles.cardGrid}>
            <img alt='banner-bg'
                 className={`${styles.background} ${!props.type || props.type === 'left' ? styles.left : styles.right}`}
                 src={!props.type || props.type === 'left' ? left : right}/>

            <div className={styles.title}>{props.title}</div>

            {props.title && <hr/>}

            <div className={styles.description}>{props.description}</div>

            <div className={styles.cards}>
                {props.children}
            </div>

            <div className={styles.button}>
                {props.button}
            </div>
        </section>
    </>
}

export default CardGrid;
