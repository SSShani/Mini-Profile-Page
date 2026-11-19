import styles from "./ProfileCard.module.css";
import Button from "./Button";

function ProfileCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.description}>{props.description}</p>
      <Button type={props.type} text={props.buttonText} />
    </div>
  );
}

export default ProfileCard;