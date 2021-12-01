import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/list");
  };

  return (
    <>
      <div >
        <h1>Discover the spells</h1>
        <button type="submit" onClick={handleSearch}>
          teleport now
        </button>
      </div>
    </>
  );
}