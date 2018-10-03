import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { Text } from 'preact-i18n';

const Header = () => (
	<header class={style.header}>
		<h1>Gladys Developers</h1>
		<nav>
			<Link activeClassName={style.active} href="/"><Text id="generics.home" /></Link>
			<a href="https://community.gladysproject.com" target='blank'><Text id="header.forum"/></a>
			<a href="https://github.com/GladysProject/Gladys" target='blank'>GitHub</a>
			<Link activeClassName={style.active} href="/login"><Text id="header.connection" /></Link>
		</nav>
	</header>
);

export default Header;
