import { h, Component } from 'preact'
import Login from '../../components/login'
import { connect } from 'preact-redux'
import { authenticate } from '../../actions/login'

const mapStateToProps = state => ({
})

const mapDispatchToPros = dispatch => ({
  authenticate: credentials => dispatch(authenticate(credentials))
})

export default connect(mapStateToProps, mapDispatchToPros)(Login)