import React, { memo, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  console.log('App 执行了')
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)

  const onClick = () => {
    setN(n => n + 1)
  }

  const onClickChild = useMemo(() => {
    return () => {
      console.log('我不会执行的')
    }
  }, [m])

  return (
    <div>
      <div>
        <button onClick={onClick}>update n {n}</button>
      </div>
      <Child data={m} onClick={onClickChild} />
    </div>
  )
}

const Child = memo(props => {
  console.log('执行了')
  console.log('如果这里有大量代码')
  return <div onClick={props.onClick}>Child: {props.data}</div>
})

const root = document.getElementById('root')
ReactDOM.render(<App />, root)