//import styles from "./ProductClipping.module.css";

export default function SingleCard({
  name,
  cost,
  damage,
  description,
  level,
  range,
  school,
  i
}, ) {
  return (
    <div key={i} >
      <p>{name} </p>
      <p>cost: {cost} </p>
      <p>damage: {damage} </p>
      <p>description: {description} </p>
      <p>level: {level} </p>
      <p>range: {range} </p>
      <p>school: {school} </p>
    </div>
  );
}
