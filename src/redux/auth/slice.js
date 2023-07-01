import { createSlice } from '@reduxjs/toolkit'
import { register, login, logout, getCurrentUser } from './operations'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
				toast.success('You are successfully logged in')
			})
			.addCase(register.rejected, () =>
				toast.error('Something went wrong, try again later')
			)
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
				toast.success('You are successfully logged in')
			})
			.addCase(login.rejected, () => toast.error('Wrong email or password'))
			.addCase(logout.fulfilled, (state, _) => {
				state.user = { name: null, email: null }
				state.token = null
				state.isLoggedIn = false
				toast.success('You are successfully logged out')
			})
			.addCase(getCurrentUser.pending, (state, _) => {
				state.isRefreshing = true
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoggedIn = true
				state.isRefreshing = false
			})
			.addCase(getCurrentUser.rejected, (state, _) => {
				state.isRefreshing = false
			})
	},
})

export const authReducer = authSlice.reducer
