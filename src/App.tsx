import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
	return (
		<Suspense fallback={<div className="lh-80dvh text-24 text-center">🌀 Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	)
}

export default App
