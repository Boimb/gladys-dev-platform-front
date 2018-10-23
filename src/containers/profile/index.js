import { connect } from 'preact-redux';
import { updateProfile } from '../../actions/user'
import Profile from '../../components/profile';
import { UserFormContainer} from '../signup';

class ProfileContainer extends UserFormContainer {
  constructor (){
    super()
  }

  componentWillMount() {
    const { name, email, language } = {...this.props.user}
    this.setState({
      name,
      email,
      language
    })
  }

  componentWillReceiveProps (nextProps) {
    // registration success or already logged, redirect to '/'
    nextProps.user && !nextProps.user.isFetching && this.setState(prevState => ({
      name: nextProps.user.name || prevState.name,
      email: nextProps.user.email || prevState.email,
      language: nextProps.user.language || prevState.language,
    }))
  }

  handleSubmit = () => {
    const updatedUser = {
      id: this.props.user.id,
      name: this.state.name,
      email: this.state.email,
    }
    return this.props.submit(updatedUser)
  }

  isFormValid = () => {
    const isErrored = Object.keys(this.state.errors)
      .map(key => this.state.errors[key])
      .filter(error => error === true).length !== 0;
    const isFilled = !!this.state.name &&
      !!this.state.email &&
      !!this.state.language;
    return isFilled && !isErrored;
  };

  render () {
    return (<Profile
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
    />);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  submit: user => dispatch(updateProfile(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);