import { increase, decrease } from '../reducers/test'
import Counter2 from '../component/Counter2'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  count: state.counter2.count,
})

const mapDispatchToProps = dispatch => ({
  increase2: () => dispatch(increase()),
  decrease4: () => dispatch(decrease()),
})

const counterContainerTest = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter2)

export default counterContainerTest
