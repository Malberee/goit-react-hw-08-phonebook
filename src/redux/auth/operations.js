import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`
	},

	unset() {
		axios.defaults.headers.common.Authorization = ''
	},
}

export const register = createAsyncThunk(
	'auth/register',
	async (credentials, thunkAPI) => {
		try {
			const { data } = await axios.post('/users/signup', credentials)
			token.set(data.token)
			toast.success('You are successfully logged in')
			return data
		} catch (err) {
			toast.error('Something went wrong, try again later')
			return thunkAPI.rejectWithValue(err.message)
		}
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async (credentials, thunkAPI) => {
		try {
			const { data } = await axios.post('/users/login', credentials)
			token.set(data.token)
			toast.success('You are successfully logged in')
			return data
		} catch (err) {
			toast.error('Wrong email or password')
			return thunkAPI.rejectWithValue(err.message)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await axios.post('/users/logout')
		token.unset()
		toast.success('You are successfully logged out')
	} catch (err) {
		toast.error('Something went wrong, try again later')
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const getCurrentUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const persistedToken = thunkAPI.getState().auth.token

		persistedToken && token.set(persistedToken)

		try {
			const { data } = await axios.get('/users/current')
			return data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message)
		}
	}
)
