import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/authSlice'
import { contactsReducer } from './contacts/contactsSlice'
import { filterReducer } from './filter/filterSlice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		contacts: contactsReducer,
		filter: filterReducer,
	},
})

export default store
