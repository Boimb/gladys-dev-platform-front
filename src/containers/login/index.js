import { Component } from 'preact'
import Login from '../../components/login';
import { connect } from 'preact-redux';
import { authenticate } from '../../actions/user';
import { route } from 'preact-router';

class LoginContainer extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      }
    };
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

  render() {
    return (
      <Login
        errors={this.state.errors}
        callbacks={{
          handleFillEmail: this.handleFillEmail,
          handleFillPassword: this.handleFillPassword,
          handleSubmit: this.handleSubmit
        }}
      />)
  }

}





const mapStateToProps = state => ({});

const mapDispatchToPros = dispatch => ({
  authenticate: credentials => dispatch(authenticate(credentials))
  .then(() => route('/', true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPros,
)(LoginContainer);
