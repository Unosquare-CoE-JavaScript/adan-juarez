import { useSelector } from "react-redux"
import { decrement, increment, set } from "../state/actions"
import { useActions } from "./use-action"

export const useCounter = () => {
    const count = useSelector(state => state.count)
    const actions = useActions({ increment, decrement, set })

    return { count, ...actions }
}