import { connect } from 'preact-redux';

import Profile from '../../components/profile';
import { updateProfile } from '../../actions/user';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: user => dispatch(updateProfile(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);