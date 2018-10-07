import { Component } from 'preact';
import style from './style';
import { withText } from 'preact-i18n';

@withText({
  email: 'login.email',
  password: 'login.password',
  submit: 'login.submit',
})
class Login extends Component {

  render () {
    return (
      <div class={style.form}>
        <form onSubmit={this.props.callbacks.handleSubmit}>
          <input
            placeholder={this.props.email}
            onChange={e => this.props.callbacks.handleFillEmail(e.target.value)}
          />
          <input
            placeholder={this.props.password}
            onChange={e => this.props.callbacks.handleFillPassword(e.target.value)}
          />
          <button type="submit">{this.props.submit}</button>
        </form>
      </div>
    );
  }
}

export default Login;
