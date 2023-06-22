import { createSlice } from '@reduxjs/toolkit'
import { register, logIn, logOut } from './authOperations'

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fullfilled]: (state, action) => {
			state.user = action.payload.user
			state.token = payload.token
			state.isLoggedIn = true
		},
		[logIn.fullfilled]: (state, action) => {
			state.user = action.payload.user
			state.token = payload.token
			state.isLoggedIn = true
		},
		[logOut.fullfilled]: (state, action) => {
			;(state.user = { name: null, email: null }), (state.token = null)
			state.isLoggedIn = false
		},
	},
})

export const authReducer = authSlice.reducer
