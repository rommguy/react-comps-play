export const tagsActionTypes = {
  UPDATE_TAGS: 'updateTags'
}

export const updateTags = tags => ({
  type: tagsActionTypes.UPDATE_TAGS,
  tags
})