import React, { memo, useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)

  const onClick = () => {
    setN(n => n + 1)
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>update n {n}</button>
      </div>
      <Child data={m} />
    </div>
  )
}

// 使用 memo 能解决不必要的 render
const Child = memo(props => {
  console.log('执行了')
  console.log('如果这里有大量代码')
  return <div>Child: {props.data}</div>
})

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
