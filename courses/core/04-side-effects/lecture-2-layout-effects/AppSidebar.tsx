import { useState, useEffect, useLayoutEffect } from 'react'
import { RecentLessons } from 'course-platform/RecentLessons'

export const AppSidebar = () => {
  return (
    <aside className="card w-130">
      <RecentLessons />
    </aside>
  )
}
