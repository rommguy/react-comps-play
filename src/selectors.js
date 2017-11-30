import {map, identity} from 'lodash/fp'

export const getTableData = state => map(identity, state.usersData)