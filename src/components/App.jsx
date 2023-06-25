import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { lazy, Suspense, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { getCurrentUser } from '../redux/auth/operations'
import './App.scss'
import PrivateRoute from './PrivateRoute'
import RestrictedRoute from './RestrictedRoute'
import SharedLayout from './SharedLayout'
const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))
const Contacts = lazy(() => import('../pages/Contacts'))
const Home = lazy(() => import('../pages/Home'))

const App = () => {
	const dispatch = useDispatch()

	const { isRefreshing } = useAuth()

	useEffect(() => {
		dispatch(getCurrentUser())
	}, [dispatch])

	return (
		!isRefreshing && (
			<>
				<Suspense>
					<Routes>
						<Route path="/" element={<SharedLayout />}>
							<Route index element={<Home />} />
							<Route
								path="/login"
								element={
									<RestrictedRoute redirectTo="/contacts" component={<Login />} />
								}
							/>
							<Route
								path="/register"
								element={
									<RestrictedRoute
										redirectTo="/contacts"
										component={<Register />}
									/>
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
				<ToastContainer/>
			</>
		)
	)
}

export default App
