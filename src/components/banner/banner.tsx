import styles from './banner.module.scss';
import {ReactElement} from 'react';
import dots from '/pages/homepage/images/ic_dots.svg';;

const Banner = (props: {
    title: string,
    content: string,
    button: ReactElement,
    image: string,
    type?: 'normal' | 'reverse',
    separator?: boolean,
}) => {

    const stack = <>
        <div className={styles.stack}>
            <div className={styles.title}>{props.title}</div>

            {
                props.separator && <hr/>
            }

            {props.content}

            {props.button}
        </div>
    </>

    const image = <>
        <div className={styles.image}>
            <img alt='image' src={props.image}/>
        </div>
    </>

    return <>
        <section className={`${styles.banner} ${props.type === 'reverse' ? styles.reverse : ''}`}>
            <img alt='dots' className={`${styles.dots} ${props.type === 'reverse' ? styles.reverse : ''}`} src={dots}
                 width={130} height={115}/>
            {
                props.type === 'reverse' ?
                    <>
                        {image}
                        {stack}
                    </>
                    :
                    <>
                        {stack}
                        {image}
                    </>
            }
        </section>
    </>
}

export default Banner;
