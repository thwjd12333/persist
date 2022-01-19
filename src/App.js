import './App.css'
// import TodoView from './component/TodoView'
import CounterContainer from './containers/CounterContainer'
import CounterContainer2 from './containers/CounterContainerTest'
function App() {
  return (
    // <div className="App">
    //   <Counter />
    // </div>
    <>
      <CounterContainer />
      <CounterContainer2 />
    </>
  )
}

export default App
