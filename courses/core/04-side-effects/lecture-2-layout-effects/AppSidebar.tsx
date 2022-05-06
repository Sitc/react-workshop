import { useState, useEffect, useLayoutEffect } from 'react'
import { RecentLessons } from 'course-platform/RecentLessons'

function useMedia(query: string) {
  const [matches, setMatches] = useState(false)

  useLayoutEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches) // initial state
    const listener = () => {
      setMatches(media.matches)
    }
    media.addEventListener('change', listener)
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}

export const AppSidebar = ({ width = 1200 }) => {
  const isWide = useMedia(`(min-width: ${width}px)`)

  return isWide ? (
    <aside className="card w-130">
      <RecentLessons />
    </aside>
  ) : null
}
