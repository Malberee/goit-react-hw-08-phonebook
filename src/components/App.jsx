import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { lazy, Suspense, useEffect } from 'react'
import { getCurrentUser } from '../redux/auth/operations'
import './App.scss'
import PrivateRoute from './PrivateRoute'
import RestrictedRoute from './RestrictedRoute'
import SharedLayout from './SharedLayout/SharedLayout'
const Contacts = lazy(() => import('../pages/Contacts'))
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCurrentUser())
	}, [dispatch])

	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route
						path="/login"
						element={<RestrictedRoute redirectTo="/" component={<Login />} />}
					/>
					<Route
						path="/register"
						element={
							<RestrictedRoute redirectTo="/" component={<Register />} />
						}
					/>
						<Route
							path="/contacts"
							element={
								<PrivateRoute redirectTo="/login" component={<Contacts />} />
							}
						/>
				</Route>
			</Routes>
		</Suspense>
	)
}

export default App
