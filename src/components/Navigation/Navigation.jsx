import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'


const Navigation = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/main' activeClassName={s.active}>MAIN</NavLink>
      </div>
      <div>
        <NavLink to='/favorites' activeClassName={s.active}>FAVORITES</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
