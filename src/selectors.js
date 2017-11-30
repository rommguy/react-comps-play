import {map, identity} from 'lodash/fp'

export const getTableData = () => state => map(identity, state.usersData)

export const getTags = () => state => state.tags

export const getCompLayout = () => (state, {dsRead}) => dsRead.getLayout()