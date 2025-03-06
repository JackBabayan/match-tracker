import styles from "./styles.module.scss"

export default function Button(props) {
    return <button disabled={props.disabled} className={styles.button} onClick={props?.onClick || null}>{props.text}{props.icon}</button>
}
