import { useState } from 'react'
import { Icon } from 'course-platform/Icon'

// const states = []
// let count = -1

// function useState(defaultState) {
//   const countId = ++count

//   if (states[countId]) {
//     return states[countId]
//   }

//   function setState(newState) {
//     states[countId][0] = newState
//     count = -1
//     reRender()
//   }

//   const state = [defaultState, setState]
//   states[countId] = state
//   return state
// }

// const root = ReactDOM.createRoot(document.getElementById('root')!)
// function reRender() {
//   root.render(<Counter />)
// }

type CounterProps = {
  count: number
  setCount(count: number): void
  min?: number
}

export function Counter({ count, setCount, min = 0 }: CounterProps) {
  function subtract() {
    if (count > min) {
      setCount(count - 1)
    }
  }

  function add() {
    setCount(count + 1)
  }

  return (
    <div>
      <div className="counter inline-flex flex-gap">
        <div>
          <button onClick={subtract} className="button button-small">
            <Icon name="minus" />
          </button>
        </div>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(parseInt(e.target.value))
          }}
        />
        <div>
          <button onClick={add} className="button button-small">
            <Icon name="plus" />
          </button>
        </div>
      </div>
    </div>
  )
}
