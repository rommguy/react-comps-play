import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {map, identity, defaults} from 'lodash/fp'
import {editUser} from '../actions/userActions'

class InnerMainView extends Component {
  renderColumnInput(column) {
    return row => {
      const onChange = e => this.props.updateUser(defaults(row.original, {[column]: e.target.value}))
      return (<input type="text" value={row.value} onChange={onChange}/>)
    }
  }

  render() {
    const columns = [{
      Header: 'תפקיד',
      accessor: 'permissions',
      sortable: true,
      Cell: this.renderColumnInput('permissions')
    }, {
      Header: 'שם משפחה',
      accessor: 'lastName',
      Cell: this.renderColumnInput('lastName'),
      sortable: false
    }, {
      Header: 'שם פרטי',
      accessor: 'name',
      sortable: true,
      Cell: this.renderColumnInput('name')
    }, {
      accessor: 'id',
      sortable: true,
      sort: 'asc'
    }]

    const dataArr = map(identity, this.props.usersData)
    return (<ReactTable
      data={dataArr}
      columns={columns}
      sortable={false}
      onSortedChange={() => console.log('sort changed')}/>)
  }
}

InnerMainView.propTypes = {
  usersData: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired
}

const mapStateToProps = function (state) {
  return {usersData: state.usersData}
}

const mapDispatchToProps = dispatch => ({
  updateUser(userData) {
    dispatch(editUser(userData))
  }
})
export const MainView = connect(mapStateToProps, mapDispatchToProps)(InnerMainView);