/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/home'))
const About = lazy(() => import('@/pages/about'))

const routes = [
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/about',
		element: <About />
	}
]

export default routes
