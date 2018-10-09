import { Component } from 'preact';
import { connect } from 'preact-redux';
import Signup from '../../components/signup';

class SignupContainer extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      language: 'fr',
      errors: {},
    };
  }

  handleFillInput = (key, value) => {
    let newState = {};
    newState[key] = value;
    this.setState(newState);
  };

  handleSubmit = () => {
    if (this.isFormValid())
      this.props.signup(this.state);
  };

  isNullOrEmpty = (value) => !value || value === '';

  isValid = (key, test) => {
    let errors = {};
    errors[key] = !test(this.state[key]);
    this.setState(
      prevState => ({errors: Object.assign({}, prevState.errors, errors)}));
  };

  isValidEmail = (email) => (!this.isNullOrEmpty(email)) &&
    (email.split('@').length === 2);

  isValidPassword = (password) => (!this.isNullOrEmpty(password)) &&
    (password.length >= 8);

  isValidValidPassword = (confirmPassword) => (!this.isNullOrEmpty(
    confirmPassword)) &&
    (this.state.password === confirmPassword);

  isValidLanguage = (language) => ['fr', 'en'].includes(language);

  isFormValid = () => {
    const isErrored = Object.keys(this.state.errors)
      .map(key => this.state.errors[key])
      .filter(error => error === true).length !== 0;
    const isFilled = !!this.state.name &&
      !!this.state.email &&
      !!this.state.password &&
      !!this.state.language;
    return isFilled && !isErrored;
  };

  render () {
    const form = {
      name: {
        value: this.state.name,
        error: null,
      },
      email: {
        value: this.state.email,
        error: null,
      },
      password: {
        value: this.state.password,
        error: null,
      },
      validPassword: {
        value: this.state.validPassword,
        error: null,
      },
      language: {
        value: this.state.language,
        error: null,
      },
    };

    return (
      <Signup
        {...this.state}
        handleFillInput={this.handleFillInput}
        handleSubmit={this.handleSubmit}
        validation={{
          isValidName: () => this.isValid('name',
            (val) => !this.isNullOrEmpty(val)),
          isValidEmail: () => this.isValid('email', this.isValidEmail),
          isValidPassword: () => this.isValid('password', this.isValidPassword),
          isValidConfirmPassword: () => this.isValid('confirmPassword',
            this.isValidValidPassword),
          isValidLanguage: () => this.isValid('language', this.isValidLanguage),
        }}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const dispatchToProps = (dispatch) => ({
  signup: console.log,
});

export default connect(mapStateToProps, dispatchToProps)(SignupContainer);