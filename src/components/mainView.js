import {connect} from 'react-redux'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {editUser} from '../actions/userActions'
import {getTableData} from '../selectors'
import {columns} from '../constants'

class InnerMainView extends Component {
  static propTypes = {
    tableData: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="main-view">
        <div className="table-container">
          <ReactTable
            data={this.props.tableData}
            columns={columns}
            defaultPageSize={5}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {tableData: getTableData(state)}
}

const mapDispatchToProps = dispatch => ({
  updateUser(userData) {
    dispatch(editUser(userData))
  }
})
export const MainView = connect(mapStateToProps, mapDispatchToProps)(InnerMainView);