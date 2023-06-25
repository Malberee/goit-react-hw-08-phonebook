import { createSlice } from '@reduxjs/toolkit'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { register, login, logout, getCurrentUser } from './operations'

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled](state, action) {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoggedIn = true
			toast.success('You are successfully logged in')
		},
		[register.rejected]() {
			toast.error('Something went wrong, try again later')
		},
		[login.fulfilled](state, action) {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoggedIn = true
			toast.success('You are successfully logged in')
		},
		[login.rejected]() {
			toast.error('Wrong e-mail or password')
		},
		[logout.fulfilled](state, _) {
			state.user = { name: null, email: null }
			state.token = null
			state.isLoggedIn = false
		},
		[getCurrentUser.pending](state, _) {
			state.isRefreshing = true
		},
		[getCurrentUser.fulfilled](state, action) {
			state.user = { ...action.payload }
			state.isLoggedIn = true
			state.isRefreshing = false
		},
		[getCurrentUser.rejected](state, _) {
			state.isRefreshing = false
		},
	},
})

export const authReducer = authSlice.reducer
