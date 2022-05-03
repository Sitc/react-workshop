https://wattenberger.com/blog/react-hooks
https://github.com/typescript-cheatsheets/react

```js
// Network
// localStorage
// cookies
// document or window
// working with the DOM directly (imperative, ie: needing refs)

// When we mount
// When the dep array changes
useEffect(() => {
  api.courses.getCourse(courseSlug).then((course) => {
    setCourse(course)
  })

  // When we unmount
  // When the dep array changes
  return () => {}
}, [courseSlug])
```
