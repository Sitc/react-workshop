// Read more about imports with React
// https://twitter.com/dan_abramov/status/1308739731551858689

import { useState } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Icon } from 'course-platform/Icon'

// const states = []
// let calls = -1

// function useState(defaultState) {
//   const callId = ++calls

//   if (states[callId]) {
//     return states[callId]
//   }

//   function setState(newState) {
//     states[callId][0] = newState
//     calls = -1
//     reRender()
//   }

//   const state = [defaultState, setState]
//   states[callId] = state
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
  )
}
