import { useState } from 'react'
import dayjs from 'dayjs'
import { DatePicker, DatePickerCalendar } from './DatePicker'
import './styles.scss'

export function App() {
  // const [day, setDay] = useState(() => dayjs(new Date()))

  // function previous() {
  //   setDay(day.add(-1, 'day'))
  // }

  // function forward() {
  //   setDay(day.add(1, 'day'))
  // }

  return (
    <div className="spacing">
      <DatePicker selectRange />
      {/* <hr />
      <div>Date: {day.format('DD')}</div>
      <div className="horizontal-spacing">
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={forward}>
          Forward
        </button>
      </div> */}
    </div>
  )
}
