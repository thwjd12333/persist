import { decreaseNum, increaseNum } from '../reducers/counter'
import { connect } from 'react-redux'
import Counter from '../component/Counter'

const mapStateToProps = state => ({
  num: state.counter.num,
})

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increaseNum()),
  decrease: () => dispatch(decreaseNum()),
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer
