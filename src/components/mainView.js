import {connect} from 'react-redux'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import TagsInput from 'react-tagsinput'
import {thunkUpdateTags} from '../actions/tagsActions'
import {getTableData, getTags} from '../selectors'
import {columns} from '../constants'

class InnerMainView extends Component {
  static propTypes = {
    tableData: PropTypes.array.isRequired,
    tags: PropTypes.array,
    updateTags: PropTypes.func
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
        <div className="tags-container">
          <TagsInput value={this.props.tags} onChange={this.props.updateTags}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    tableData: getTableData(state),
    tags: getTags(state)
  }
}

const mapDispatchToProps = dispatch => ({
  updateTags: newTags => dispatch(thunkUpdateTags(newTags))
})
export const MainView = connect(mapStateToProps, mapDispatchToProps)(InnerMainView);