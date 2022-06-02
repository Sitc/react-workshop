import { memo, useState, useContext, createContext, useMemo } from 'react'
import * as ReactDOM from 'react-dom/client'
import './styles.scss'

/**
 * Context is a little weird in TypeScript so we'll teach it with
 * vanilla JS first. https://reacttraining.com/blog/react-context-with-typescript/
 */

//////// CounterState.tsx

const CounterContext = createContext()

export function CounterProvider() {
  const [count, setCount] = useState(0)

  const context = useMemo(() => {
    return {
      count,
      setCount,
    }
  }, [count])

  return <CounterContext.Provider value={context}></CounterContext.Provider>
}

export function useCounterContext() {
  const context = useContext(CounterContext)
  if (!context) {
    throw Error('You are trying to consume context outside of ')
  }
  return context || {}
}

//////// App.tsx

function App() {
  return (
    <CounterProvider>
      <AppLayout />
    </CounterProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

//////// AppLayout.tsx

const AppLayout = memo(() => {
  console.log('render')
  return <Page />
})

//////// Page.tsx

function Page() {
  return <Counter />
}

//////// Counter.tsx

function Counter() {
  const { count, setCount } = useCounterContext() // useContext

  return (
    <div className="card spacing">
      <h1>Counter</h1>
      <button className="button" onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  )
}
