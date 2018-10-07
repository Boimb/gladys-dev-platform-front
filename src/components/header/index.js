import { Link } from 'preact-router';
import style from './style';
import { Text } from 'preact-i18n';

const Header = () => (
  <header class={style.header}>
    <h1>Preact App</h1>
    <nav>
      <Link activeClassName={style.active} href="/">
        <Text id="generics.home"/>
      </Link>
      <a href="https://community.gladysproject.com">
        <Text id="header.forum"/>
      </a>
      <a href="https://github.com/GladysProject/Gladys">GitHub</a>
      <Link activeClassName={style.active} href="/login">
        <Text id="header.connection"/>
      </Link>
    </nav>
  </header>
);

export default Header;
