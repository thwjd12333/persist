import React, { useState } from 'react'
import MemoItem from './MemoItem'
const Counter2 = props => {
  const { count, increase2, decrease2, addMemo, memo } = props
  const [text, setText] = useState('')
  const onChange = e => {
    setText(e.target.value)
  }
  const inlineStyle = {
    marginLeft: '10px',
  }
  const addMemoData = value => {
    addMemo(value)
    clearText()
  }
  const clearText = () => {
    setText('')
  }
  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={increase2}>+</button>
      </div>
      <div>
        <button onClick={decrease2}>-</button>
      </div>

      <div>
        {memo.map(memo => (
          <MemoItem memo={memo} key={memo.id} />
        ))}
        <input value={text || ''} onChange={onChange} type="text" />
        <button onClick={() => addMemoData(text)} style={inlineStyle}>
          입력
        </button>
      </div>
    </>
  )
}

export default Counter2
