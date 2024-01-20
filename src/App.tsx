import { Router } from '@solidjs/router'
import routes from '~solid-pages'
import Footer from './components/Footer'

export default function App() {
  return (
    <main class="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Router>
        {routes}
      </Router>
      <Footer />
    </main>
  )
}

