import { Component } from 'preact'
import style from './style'
import { withText } from 'preact-i18n'

@withText({
  email: 'login.email',
  password: 'login.password',
  submit: 'login.submit'
})
class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleFillEmail = (value) => this.setState({
    email: value
  })
  handleFillPassword = (value) => this.setState({
    password: value
  })

  validate = () => this.state.email !== '' && this.state.password !== ''

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.validate()) {
      this.props.authenticate({
        email: this.state.email,
        password: this.state.password
      })
    }
  }

  render () {
    return (
      <div class={style.form}>
        <form onSubmit={this.handleSubmit}>
          <input placeholder={this.props.email} onChange={(e) => this.handleFillEmail(e.target.value)} />
          <input placeholder={this.props.password} onChange={(e) => this.handleFillPassword(e.target.value)} />
          <button type='submit'>{this.props.submit}</button>
        </form>
      </div>
    )
  }
}

export default Login
