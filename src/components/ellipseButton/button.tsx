import styles from './button.module.scss';
import {ReactElement} from "react";

const EllipseButton = (props: {
    text: string,
    content?: ReactElement,
    onClick?: () => void,
    type?: 'primary',
}) => {
    return <>
        <a href='' className={`${styles.button} ${props.type ? styles[props.type] : ''}`} onClick={props.onClick}>
            <div className={props.content ? styles.horizontalContainer : styles.emptyContainer}>
                <div>{props.text}</div>
                {props.content}
            </div>
        </a>
    </>
}

export default EllipseButton;