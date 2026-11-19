import { Link } from "react-router";

export default function Button({ type }) {
  return (
    <button className={`btn ${type}`}>
      <Link to="/book">book a table</Link>
    </button>
  );
}
