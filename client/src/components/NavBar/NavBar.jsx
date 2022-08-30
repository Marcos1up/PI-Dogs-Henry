import { Link } from "react-router-dom";
import style from './NavBar.module.css';

export default function Nav() {
  return (
    <div className={style.flex_container}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={style.letters}>Start</div>
      </Link>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <div className={style.letters}>Home</div>
      </Link>
      <Link to="/dogs" style={{ textDecoration: "none" }}>
        <div className={style.letters}>Create Dog</div>
      </Link>
    </div>
  );
}
