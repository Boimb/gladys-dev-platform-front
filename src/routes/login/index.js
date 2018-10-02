import { h } from 'preact'
import style from './style'
import { withText } from 'preact-i18n'
const language = ['login.username', 'login.password', 'login.submit']

const Login = withText(language)((props) => (
  <div class={style.form}>
    <form>
      <input placeholder={props.username}/>
      <input placeholder={props.password}/>
      <button>{props.submit}</button>
    </form>
  </div>
));


export default Login
