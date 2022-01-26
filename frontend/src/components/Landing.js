import { useNavigate } from "react-router-dom";
import styles from "../styles/main.module.scss";
export default function Landing() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/list");
  };

  return (
    
      <div className={styles.container} >
        <h1>Discover the spells</h1>
        <button type="submit" onClick={handleSearch}>
        to the Spellbook
        </button>
      </div>
    
  );
}