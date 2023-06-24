import { createSlice } from '@reduxjs/toolkit'
import { register, logIn, logOut, getCurrentUser } from './operations'

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled](state, action) {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		[logIn.fulfilled](state, action) {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoggedIn = true
		},
		[logOut.fulfilled](state, _) {
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
		}
	},
})

export const authReducer = authSlice.reducer
