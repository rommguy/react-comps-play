import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {map, identity} from 'lodash/fp'

class InnerMainView extends Component {
  render() {
    const columns = [{
      accessor: 'id'
    }, {
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Name',
      accessor: 'lastName'
    }]

    const dataArr = map(identity, this.props.userData)
    return (<ReactTable data={dataArr} columns={columns}/>)
  }
}

InnerMainView.propTypes = {
  userData: PropTypes.object
}

const mapStateToProps = function(state) {
  return {userData: state.userData}
}
export const MainView = connect(mapStateToProps)(InnerMainView);