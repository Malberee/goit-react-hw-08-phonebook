import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { lazy, Suspense, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { getCurrentUser } from '../redux/auth/operations'
import { useColorMode, Spinner, Center } from '@chakra-ui/react'
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

	const { colorMode, toggleColorMode } = useColorMode()
	const { isRefreshing } = useAuth()

	useEffect(() => {
		dispatch(getCurrentUser())
	}, [dispatch])

	return !isRefreshing ? (
		<>
			<Suspense fallback={<Spinner />}>
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
								<RestrictedRoute redirectTo="/contacts" component={<Register />} />
							}
						/>
						<Route
							path="/contacts"
							element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
						/>
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</Suspense>
			<ToastContainer position="bottom-center" theme={colorMode} />
		</>
	) : (
		<Center h="100vh">
			<Spinner size="xl" color="blue.500" />
		</Center>
	)
}

export default App
