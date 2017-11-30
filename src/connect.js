import {createElement} from 'react'
import {connectAdvanced} from 'react-redux'
import PropTypes from 'prop-types'
import {assign, noop} from 'lodash'

export const connect = (mapStateToProps = noop, mapDispatchToProps = noop, shouldHandleStateChanges) => comp => {

  const selectorFactory = (dispatch, {query}) => (state, ownProps) => {
    const stateProps = mapStateToProps(query, ownProps);
    const dispatchProps = mapDispatchToProps(dispatch, ownProps);
    return assign({}, stateProps, dispatchProps, ownProps);
  };


  const Connected = (props, context) => createElement(connectAdvanced(selectorFactory, {
    methodName: 'connect',
    shouldHandleStateChanges,
    query: context.query
  })(comp), props);


  Connected.contextTypes = {
    query: PropTypes.func
  };

  return Connected;
};

