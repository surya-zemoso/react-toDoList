import { ADD_LIST, REMOVE_LIST } from "../constants/action-types"
export const AddList = (payload) => {
    return { type: ADD_LIST, payload }

}
export const RemoveList = (payload) => {
    return { type: REMOVE_LIST, payload }

}
