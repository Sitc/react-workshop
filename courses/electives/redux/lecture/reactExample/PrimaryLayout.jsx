import { connect, useSelector } from 'react-redux'
import Counter from './Counter'

function PrimaryLayout() {
  const { count } = useSelector((store) => {
    return { count: store.counterState.count }
  })

  return (
    <div>
      <h1>Redux Counter</h1>
      <div>Count: {count}</div>
      <Counter />
    </div>
  )
}

// function mapStateToProps(store) {
//   return {
//     count: store.counterState.count,
//   }
// }

// export default connect(mapStateToProps)(PrimaryLayout)

export default PrimaryLayout
