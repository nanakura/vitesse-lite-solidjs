
import { Router, useRoutes } from 'solid-app-router'
import { Suspense } from 'solid-js'
import routes from '~solid-pages'

export default function App() {
  return (
    <main class="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Router>
        <Routes />
      </Router>
    </main>
  )
}

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
