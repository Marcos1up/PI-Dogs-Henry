import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">
      <div>Start</div>
      </Link>
      <Link to="/home">
        <div>Home</div>
      </Link>
      <Link to="/dogs">
        <div>Create Dog</div>
      </Link>
    </div>
  );
}
