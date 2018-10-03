import { h, Component } from 'preact'
import style from './style'
import { withText } from 'preact-i18n'
const language = ['login.username', 'login.password', 'login.submit']


@withText({
  username: 'login.username',
  password: 'login.password',
  submit: 'login.submit'
})
class Login extends Component {
  constructor () {
    super()
    this.state = {
      credentials: {
        username: '',
        password: ''
      },
    }
  }

  handleSubmit = () => this.props.authenticate(this.state.credentials)

  render() {
    return (
      <div class={style.form}>
        <form>
          <input placeholder={this.props.username}/>
          <input placeholder={this.props.password}/>
          <div onClick={this.handleSubmit} >{this.props.submit}</div>
        </form>
      </div>
    )
  }
}

export default Login
