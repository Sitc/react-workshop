import { createContext, useState, useEffect, useCallback } from 'react'
import { api } from 'course-platform/utils/api'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import type { User } from 'course-platform/utils/types'

// Layouts
import { WebsiteLayout } from './WebsiteLayout'
import { AppLayout } from './AppLayout'
import { CoursesSubLayout } from 'course-platform/AppSubLayouts'

// Pages
import { HomePage } from 'course-platform/HomePage'
import { Login } from 'course-platform/Login'
import { AddCourseForm } from 'course-platform/AddCourseForm'
import { BrowseCourses } from 'course-platform/BrowseCourses'
import { BrowseCourseLessons } from 'course-platform/BrowseCourseLessons'
import { LessonProfile } from 'course-platform/LessonProfile'

export function App() {
  const navigate = useNavigate()

  function onSuccess(user) {}

  // prettier-ignore
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login onSuccess={onSuccess} />} />
      </Route>
      <Route path="admin" element={<AppLayout  />}>
        <Route index element={<Navigate replace to="courses" />} />
        <Route path="courses" element={<CoursesSubLayout />}>
          <Route index element={<BrowseCourses />} />
          <Route path="add" element={<AddCourseForm />} />
          <Route path=":courseSlug" element={<BrowseCourseLessons />} />
          <Route path=":courseSlug/:lessonSlug" element={<LessonProfile />} />
        </Route>
      </Route>
    </Routes>
  )
}
