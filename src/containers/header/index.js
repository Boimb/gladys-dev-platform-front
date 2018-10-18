import { connect } from 'preact-redux';
import { route } from 'preact-router';
import { logout } from '../../actions/user';
import Header from '../../components/header';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
  ...ownProps,
  user: propsFromState.user,
  logout: () => {
    propsFromDispatch.logout();
    route('/');
  },
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header);