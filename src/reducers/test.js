const INCRE = 'ACTION/INCRESE'
const DCREA = 'ACTION/DECREASE'
const ADDMEMO = 'ACTION/MEMO'

const initState = {
  count: 0,
  memo: [],
}

export const increase = () => {
  return { type: INCRE }
}
export const decrease = () => {
  return { type: DCREA }
}
export const addMemo = value => {
  return { type: ADDMEMO, value: value }
}
export const delMemo = value => {}

export default function counter2(state = initState, action) {
  switch (action.type) {
    case INCRE:
      return {
        ...state,
        count: state.count + 1,
      }
    case DCREA:
      return {
        ...state,
        count: state.count - 1,
      }
    case ADDMEMO:
      return {
        ...state,
        memo: state.memo.concat({
          id: state.memo.length,
          num: state.count,
          str: action.value,
        }),
      }
    default:
      return state
  }
}
