import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useGlobalStore } from '@/stores'

function App() {
  const useGlobal = useGlobalStore() as any

	useEffect(() => {
		useGlobal.setDarkMode(useGlobal.isDark)
	}, [])

  return (
    <Suspense fallback={<div className="lh-80dvh text-24 text-center">🌀 Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
