import { Component } from 'preact';
import Login from '../../components/login';
import { connect } from 'preact-redux';
import { compose } from 'redux';
import { withText } from 'preact-i18n';
import { route } from 'preact-router';
import { authenticate } from '../../actions/user';
import { addNotification } from '../../actions/notification';

class LoginContainer extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    };
  }

  componentWillMount () {
    // No need to be here if already logged ;)
    this.props.user.isLogged && route('/');
  }

  componentWillReceiveProps (nextProps) {
    // No need to be here if already logged ;)
    nextProps.user.isLogged && route('/');
  }

  handleFillEmail = value =>
    this.setState({
      email: value,
    });
  handleFillPassword = value =>
    this.setState({
      password: value,
    });

  validate = () => this.state.email !== '' && this.state.password !== '';

  handleSubmit = e => {
    e.preventDefault();
    if (this.validate()) {
      this.props.authenticate({
        email: this.state.email,
        password: this.state.password,
      });
    }
  };

  render () {
    return (
      <Login
        errors={this.state.errors}
        callbacks={{
          handleFillEmail: this.handleFillEmail,
          handleFillPassword: this.handleFillPassword,
          handleSubmit: this.handleSubmit,
        }}
      />);
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToPros = (dispatch, ownProps) => ({
  authenticate: credentials => dispatch(authenticate(credentials))
    .then((res) => dispatch(addNotification({
      message: `${ownProps.welcomeMessage} ${res.payload.data.name}`,
      title: `${ownProps.welcomeMessage}`,
    })))
    .then(() => route('/', true)),
});

export default compose(
  withText({
    welcomeMessage: 'login.welcome',
  }),
  connect(
    mapStateToProps,
    mapDispatchToPros,
  ))
(LoginContainer);
