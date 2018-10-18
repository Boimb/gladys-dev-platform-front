import { Component } from 'preact';
import Login from '../../components/login';
import { connect } from 'preact-redux';
import { authenticate } from '../../actions/user';
import { route } from 'preact-router'

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
    this.props.user.isLogged && route('/')
  }

  componentWillReceiveProps (nextProps) {
    // No need to be here if already logged ;)
    nextProps.user.isLogged && route('/')
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

const mapDispatchToPros = dispatch => ({
  authenticate: credentials => dispatch(authenticate(credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPros,
)(LoginContainer);
