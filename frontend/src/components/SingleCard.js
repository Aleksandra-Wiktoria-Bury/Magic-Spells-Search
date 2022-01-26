import styles from "../styles/main.module.scss";

export default function SingleCard({
  name,
  cost,
  damage,
  description,
  level,
  range,
  school,
  i,
}) {
  return (
    <div key={i} className={styles.card}>
      <h2>{name}</h2>
      <div className={styles[`${school}`]}>
        <span>{school}</span>
      </div>
      <h4>level: {level} </h4>
      <p>{description} </p>
      <h4>
        damage: {damage} | range: {range}{" "}
      </h4>
      <span>cost: {cost} </span>
    </div>
  );
}
