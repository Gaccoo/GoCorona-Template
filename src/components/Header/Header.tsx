import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import Button from '../Button/Button';
import logo from '../../assets/logo.svg';
import color from '../../styles/colorScheme';

const baseRed = '#EC5863';
const baseBlue = '#4285F4';

const Header = () => (
  <div className={style.header} style={{ backgroundColor: color.bgGray }}>

    <img className={style.header__logo} src={logo} alt="GoCorona logo" />

    <div className={style.navigation}>
      <NavLink className={style.navLink} to="/">HOME</NavLink>
      <NavLink className={style.navLink} to="/">FEATURE</NavLink>
      <NavLink className={style.navLink} to="/">SUPPORT</NavLink>
      <NavLink className={style.navLink} to="/">CONTACT US</NavLink>
    </div>

    <div className={style.header__action}>
      <Button color={baseBlue} text="DOWNLOAD" />
    </div>
  </div>
);

export default Header;
