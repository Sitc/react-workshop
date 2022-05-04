import * as ReactDOM from 'react-dom/client'
import { FaTrash } from 'react-icons/fa'
import './styles.scss'

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button" type="button">
      {children}
    </button>
  )
}

function App() {
  const courses = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JS' },
  ]

  function onClick() {}

  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <h1>{course.name}</h1>
            <Button onClick={onClick}>
              <span>Remove Course</span>
              <FaTrash />
            </Button>
          </div>
        )
      })}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
