import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Contacts from '../pages/Contacts'
import Login from '../pages/Login'
import Register from '../pages/Register'


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Contacts />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	)
}

export default App
