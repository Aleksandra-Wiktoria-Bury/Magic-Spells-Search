import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const axios = require("axios");

export default function SpellCards() {
  const limit = 5;
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("school");

  const url = `http://localhost:3001/magic-spell/list?search=${search}&skip=${skip}&limit=${limit}`;

  const spells = async () => {
    try {
      const response = await axios.get(url);
      setList(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleForward = () => {
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
          Magic Spells {skip} to {skip + limit}
        </p>
        <div>
          <button onClick={handleBackwards}>👈</button>
          <button onClick={handleForward}>👉</button>
        </div>
        <p>Sort by:</p>
      </div>
      <div>
        {list.map((spell, i) => (
          <SingleCard {...spell} key={i} />
        ))}
      </div>
    </div>
  );
}
