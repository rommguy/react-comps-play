import {getTags} from '../selectors'
import {take} from 'lodash/fp'

export const tagsActionTypes = {
  UPDATE_TAGS: 'updateTags'
}

const updateTags = tags => ({
  type: tagsActionTypes.UPDATE_TAGS,
  tags
})

export const thunkUpdateTags = tags => (dispatch, query) => {
  const currentTags = query(getTags())
  if (currentTags.length === 6) {
    dispatch(updateTags(take(1, currentTags)))
    return
  }

  dispatch(updateTags(tags))
}