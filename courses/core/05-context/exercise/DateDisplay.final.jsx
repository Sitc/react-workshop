import { createContext, useContext } from 'react'
import dayjs from 'dayjs'

const DateContext = createContext()

export function DateDisplay({ children, date }) {
  const context = {
    date: dayjs(date || new Date()),
  }

  return <DateContext.Provider value={context}>{children}</DateContext.Provider>
}

export function DateYear({ format = 'YYYY' }) {
  const { date } = useContext(DateContext)
  return <>{date.format(format)}</>
}

export function DateMonth({ format = 'MM' }) {
  const { date } = useContext(DateContext)
  return <>{date.format(format)}</>
}

export function DateDay({ format = 'DD' }) {
  const { date } = useContext(DateContext)
  return <>{date.format(format)}</>
}
