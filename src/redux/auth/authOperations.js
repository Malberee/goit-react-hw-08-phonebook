import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const register = createAsyncThunk('auth/register', async credentials => {
	try {
		console.log(credentials)
		const { data } = await axios.post('/users/signup', credentials)
		console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
})

export const logIn = createAsyncThunk('auth/login', async (credentials) => {
	try {
		console.log('login')
		const { data } = await axios.post('/users/login', credentials)
		console.log(data)
		return data
	} catch (err) {
		console.log(err)
	}
})

export const logOut = createAsyncThunk('auth/logout', async (credentials) => {
	try {
		const { data } = await axios.post('/users/logout', credentials)
		return data
	} catch (err) {
		console.log(err)
	}
})