import { createSlice } from '@reduxjs/toolkit'
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
	extraReducers: (builder) => {
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(logout.fulfilled, (state, _) => {
				state.user = { name: null, email: null }
				state.token = null
				state.isLoggedIn = false
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
