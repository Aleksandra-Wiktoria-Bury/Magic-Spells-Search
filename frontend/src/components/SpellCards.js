import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import styles from '../styles/main.module.scss';
const axios = require("axios");

export default function SpellCards() {
  const limit = 4;
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("school");
  const [field, setField] = useState("");
  const [filter, setFilter] = useState("");

  const url = `http://localhost:3001/magic-spell/list?search=${search}&skip=${skip}&limit=${limit}&field=${field}&filter=${filter}`;
  
  const spells = async () => {
    try {
      const response = await axios.get(url);
      setList(response.data);
      //console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleForward = () => {
    if(skip < 24)
    setSkip(skip + limit);
  };

  const handleBackwards = () => {
    const newSkip = skip - limit;
    if (newSkip <= 0) {
      setSkip(0);
    } else {
      setSkip(newSkip);
    }
  };

  useEffect(() => spells(), [skip]);
  return (
    <div>
      <div>
        <p>
          Magic Spells {skip + 1} to {limit + skip}
        </p>
        <div>
          <button onClick={handleBackwards}>👈</button>
          <button onClick={handleForward}>👉</button>
        </div>
        <p>Sort by:</p>
      </div>
      <div className={styles.cards}>
        {list.map((spell, i) => (
          <SingleCard {...spell} key={i} />
        ))}
      </div>
    </div>
  );
}
