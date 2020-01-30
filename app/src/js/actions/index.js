import { ADD_LIST, REMOVE_LIST } from "../constants/action-types"
export const addList = (payload) => {
    return { type: ADD_LIST, payload }

}
export const removeList = (payload) => {
    return { type: REMOVE_LIST, payload }

}
