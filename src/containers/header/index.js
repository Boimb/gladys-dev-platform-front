import { Component } from 'preact'
import { connect } from 'preact-redux';
import { compose } from 'redux'
import { route } from 'preact-router';
import Header from '../../components/header'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({

})

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
  ...ownProps,
  user: propsFromState.user
})



export default compose(connect(mapStateToProps, mapDispatchToProps, mergeProps))(Header)