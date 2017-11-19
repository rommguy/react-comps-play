export const userActionTypes = {
  EDIT_USER: 'editUser'
}

export const editUser = userData => ({
  type: userActionTypes.EDIT_USER,
  userData
})