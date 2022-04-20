import * as React from 'react'
import slowFunction from './utils/slowFunction'

export function App() {
  const [count, setCount] = React.useState(0)

  const input = count >= 5 // Let's change the input to the slow function

  console.time()
  const x = React.useMemo(() => slowFunction(input), [input])
  console.timeEnd()

  // Memoization: To cache a return value of a pure function in a way such that
  // if you call the function again, it returns the cached value

  return (
    <div className="text-center spacing">
      <button className="button" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <p>
        Notice the delay when we click!
        <br />
        <code>slowFunction</code> loops to {x}
      </p>
    </div>
  )
}
