import Login from '../../components/login';
import { connect } from 'preact-redux';
import { authenticate } from '../../actions/login';
import { route } from 'preact-router';

const mapStateToProps = state => ({});

const mapDispatchToPros = dispatch => ({
  authenticate: credentials => dispatch(authenticate(credentials))
  .then(() => route('/', true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPros,
)(Login);
