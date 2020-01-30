import { ADD_LIST, REMOVE_LIST } from "../constants/action-types"
export function addList(payload) {
    return { type: ADD_LIST, payload }

}
export function RemoveList(payload) {
    return { type: REMOVE_LIST, payload }

}