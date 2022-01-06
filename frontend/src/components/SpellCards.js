import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import styles from "../styles/main.module.scss";
const axios = require("axios");

export default function SpellCards() {
  //? --------- STATE MANAGEMENT
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [maxNum, setMaxNum] = useState(null);
  const [sort, setSort] = useState("school");
  const [field, setField] = useState("");
  const [filter, setFilter] = useState("");

  const limit = 4;

  const url = `http://localhost:3001/magic-spell/list?sort=${sort}&skip=${skip}&limit=${limit}&field=${field}&filter=${filter}`;

  //? --------- GET DATA
  const spells = async () => {
    try {
      const response = await axios.get(url);
      setList(response.data.data);
      setMaxNum(response.data.maxNum);
    } catch (err) {
      console.log(err);
    }
  };

  //? --------- HANDLE DISPLAY

  //* ----- SKIP
  const handleForward = () => {
    if (skip < maxNum - limit) setSkip(skip + limit);
  };
  const handleBackwards = () => {
    skip <= 0 && skip < limit ? setSkip(0) : setSkip(skip - limit);
  };
  //* ------ SORT
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  //* ------ FILTER

  const schools = [
    "Arcane",
    "Fire",
    "Frost",
    "Holy",
    "Nature",
    "Physical",
    "Shadow",
  ];

  const handleFilter = (e) => {
    e.target.value === "show all"
      ? setField("")
      : !isNaN(e.target.value)
      ? setField("level")
      : setField("school");
    setFilter(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSkip(0);
    spells();
  };
  // console.log(sort, field, filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => spells(), [skip]);
  return (
    <div>
      <div>
        <p>
          Magic Spells {skip + 1} to {skip + list.length}
        </p>
        <div>
          <button onClick={handleBackwards}>👈</button>
          <button onClick={handleForward}>👉</button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Sort by:</label>
          <select id="sort" name="sort" value={sort} onChange={handleSort}>
            <option>school</option>
            <option>name</option>
            <option>level</option>
            <option>cost</option>
            <option>damage</option>
            <option>range</option>
          </select>
          <label>Search by:</label>
          <select id="filter" name="filter" onChange={handleFilter}>
            <option>show all</option>
            <optgroup label="school">
              {schools.map((school, i) => (
                <option key={i}>{school}</option>
              ))}
            </optgroup>
            <optgroup label="level">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </optgroup>
          </select>
          <button type="submit">search</button>
        </form>
      </div>
      <div className={styles.cards}>
        {list.map((spell, i) => (
          <SingleCard {...spell} key={i} />
        ))}
      </div>
    </div>
  );
}
