import { Link } from "react-router-dom";
import style from './NavBar.module.css';

export default function Nav() {
  return (
    <div className={style.nav}>
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
