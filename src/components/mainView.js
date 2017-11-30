import {connect} from '../connect'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import TagsInput from 'react-tagsinput'
import {thunkUpdateTags} from '../actions/tagsActions'
import {getTableData, getTags, getCompLayout} from '../selectors'
import {columns} from '../constants'

class InnerMainView extends Component {
  static propTypes = {
    tableData: PropTypes.array.isRequired,
    tags: PropTypes.array,
    updateTags: PropTypes.func,
    layout: PropTypes.object
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
        <div>x: {this.props.layout.x} y: {this.props.layout.y}</div>
      </div>
    )
  }
}

const mapStateToProps = function (query) {
  return {
    tableData: query(getTableData()),
    tags: query(getTags()),
    layout: query(getCompLayout())
  }
}

const mapDispatchToProps = dispatch => ({
  updateTags: newTags => dispatch(thunkUpdateTags(newTags))
})
export const MainView = connect(mapStateToProps, mapDispatchToProps)(InnerMainView);