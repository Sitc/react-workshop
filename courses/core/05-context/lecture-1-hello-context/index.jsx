import { useState, useContext, createContext } from 'react'
import * as ReactDOM from 'react-dom/client'
import './styles.scss'

import Avatar from './Avatar'

/**
 * Context is a little weird in TypeScript so we'll teach it with
 * vanilla JS first. https://reacttraining.com/blog/react-context-with-typescript/
 */

/////// AuthContext.tsx

const Context = createContext()

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0)
  const context = {
    count,
    setCount,
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export function useCounter() {
  const context = useContext(Context)
  if (!context) {
    throw Error('Youre not in the right provider.....')
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

function AppLayout() {
  return <Page />
}

//////// Page.tsx

function Page() {
  return <Counter />
}

//////// Counter.tsx

// 1: props
// 2: context

function Counter() {
  const { count, setCount } = useCounter()

  return (
    <div className="card spacing">
      <h1>Counter</h1>
      <button className="button" onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  )
}
