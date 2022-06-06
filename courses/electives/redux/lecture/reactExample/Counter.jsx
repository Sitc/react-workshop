import { api } from 'course-platform/utils/api'
import * as React from 'react'
import { connect } from 'react-redux'
import { actions } from './state/counterState'

function Counter({ dispatch }) {
  function decrement() {
    dispatch(actions.decrement())
  }
  function increment() {
    dispatch(actions.increment())
  }

  useEffect(() => {
    dispatch(actions.fetchCourse) // action -> saga (fetch) -> redux
  }, [])

  useEffect(() => {
    api.courses.fetchCourse((data) => {
      // dispatching
      // error
      // loading
    })
  }, [])

  return (
    <div className="horizontal-spacing">
      <button className="button" onClick={decrement}>
        Decrement
      </button>
      <button className="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}

export default connect()(Counter)
