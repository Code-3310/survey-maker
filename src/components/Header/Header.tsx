import './Header.scss';
import {ReactComponent as AccountIcon} from '../../img/account.svg'

function Header() {
  return (
    <div className="header">
      <p className="header__text">Все опросники</p>
      <AccountIcon className="header__img"/>
    </div>
  );
}

export default Header;