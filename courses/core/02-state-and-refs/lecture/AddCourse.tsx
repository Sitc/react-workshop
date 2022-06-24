import { useState, useRef } from 'react'

type Props = {
  onSubmit(values: { name: string; lessons: number }): void
}

export function AddCourse({ onSubmit }: Props) {
  const courseNameRef = useRef<HTMLInputElement>(null!) // { current: undefined }

  const [courseName, setCourseName] = useState('')
  const [lessons, setLessons] = useState(0)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    onSubmit({ name: courseName, lessons: lessons })
    setCourseName('')
    setLessons(0)
    courseNameRef.current.focus() // document.getElementById('').focus()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-gap">
      <div className="flex-1">
        <input
          value={courseName}
          onChange={(e) => {
            setCourseName(e.target.value)
          }}
          type="text"
          className="form-field"
          placeholder="Course Name"
          aria-label="Course Name"
          ref={courseNameRef}
        />
      </div>
      <div className="flex-1">
        <input
          value={lessons}
          onChange={(e) => {
            setLessons(parseInt(e.target.value))
          }}
          type="number"
          className="form-field"
          placeholder="Lessons"
          aria-label="Lessons"
        />
      </div>
      <button className="button" type="submit">
        Add Course
      </button>
    </form>
  )
}
