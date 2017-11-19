import {defaults} from 'lodash/fp'
import {initialState} from '../appInitialState'
import {userActionTypes} from '../actions/userActions'



const editUser = (usersData, userData) => defaults(usersData, {[userData.id]: userData})


export const usersDataReducer = (usersData = initialState.usersData, action) => {
  switch (action.type) {
    case userActionTypes.EDIT_USER:
      return editUser(usersData, action.userData)
    default:
      return usersData
  }
}