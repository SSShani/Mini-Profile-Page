import styles from "./Button.module.css";

function Button(props) {
  return (
    <button className={`${styles.button} ${styles[props.type]}`}>
      {props.text}
    </button>
  );
}

export default Button;