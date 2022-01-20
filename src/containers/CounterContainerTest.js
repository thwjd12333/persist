import { increase, decrease, addMemo } from '../reducers/test'
import Counter2 from '../component/Counter2'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  count: state.counter2.count,
  memo: state.counter2.memo,
})

const mapDispatchToProps = dispatch => ({
  increase2: () => dispatch(increase()),
  decrease2: () => dispatch(decrease()),
  addMemo: val => dispatch(addMemo(val)),
})

const counterContainerTest = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter2)

export default counterContainerTest
