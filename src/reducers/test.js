const INCRE = 'ACTION/INCRESE'
const DCREA = 'ACTION/DECREASE'

const initState = {
  count: 0,
}

export const increase = () => {
  return { type: INCRE }
}
export const decrease = () => {
  return { type: DCREA }
}

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
    default:
      return state
  }
}
