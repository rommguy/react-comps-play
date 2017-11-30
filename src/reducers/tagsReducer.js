import {tagsActionTypes} from '../actions/tagsActions'
import {initialState} from '../appInitialState'

export const tagsReducer = (tags = initialState.tags, action) => {
  switch (action.type) {
    case tagsActionTypes.UPDATE_TAGS:
      return action.tags
    default:
      return tags
  }
}