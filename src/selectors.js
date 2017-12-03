import {map, identity} from 'lodash/fp'

export const getTableData = () => (query, state) => map(identity, state.usersData)

export const getTags = () => (query, state) => state.tags

export const getCompLayout = () => (query, state, {dsRead}) => dsRead.getLayout()