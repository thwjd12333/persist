const MemoItem = props => {
  return (
    <div>
      <p>
        <span>{props.memo.num} </span>
        {props.memo.str}
      </p>
    </div>
  )
}

export default MemoItem
