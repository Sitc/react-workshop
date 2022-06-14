import { useState, useEffect, useLayoutEffect } from 'react'
import { RecentLessons } from 'course-platform/RecentLessons'

// function useMedia(query: string) {
//   const [matches, setMatches] = useState(false) // wrong sometimes

//   useLayoutEffect(() => {
//     const media = window.matchMedia(query)
//     setMatches(media.matches)
//     const listener = () => {
//       setMatches(media.matches)
//     }
//     media.addEventListener('change', listener)
//     return () => {
//       media.removeEventListener('change', listener)
//     }
//   }, [query])

//   return matches
// }

export const AppSidebar = () => {
  const query = `(min-width: ${width}px)`
  const [isWide, setIsWide] = useState(false)

  useLayoutEffect(() => {
    const media = window.matchMedia(query)
    setIsWide(media.matches)
    const listener = () => {
      setIsWide(media.matches)
    }
    media.addEventListener('change', listener)
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])

  return isWide ? (
    <aside className="card w-130">
      <RecentLessons />
    </aside>
  ) : null
}
