import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header></header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  )
}

export default MyApp
