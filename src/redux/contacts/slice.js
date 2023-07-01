import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './operations'

const initialState = {
	items: [],
	isLoading: false,
	error: null,
}

const handlePending = (state) => ({
	...state,
	isLoading: true,
})

const handleRejected = (state, action) => ({
	...state,
	isLoading: false,
	error: action.payload,
})

const handleSuccessFetchContacts = (_, action) => ({
	items: action.payload,
	isLoading: false,
	error: null,
})

const handleSuccessAddContact = (state, action) => ({
	items: [...state.items, action.payload],
	isLoading: false,
	error: null,
})

const handleSuccessDeleteContact = (state, action) => ({
	items: state.items.filter((item) => item.id !== action.payload.id),
	isLoading: false,
	error: null,
})

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, handlePending)
			.addCase(fetchContacts.fulfilled, handleSuccessFetchContacts)
			.addCase(fetchContacts.rejected,handleRejected)
			.addCase(addContact.pending, handlePending)
			.addCase(addContact.fulfilled, handleSuccessAddContact)
			.addCase(addContact.rejected, handleRejected)
			.addCase(deleteContact.pending, handlePending)
			.addCase(deleteContact.fulfilled, handleSuccessDeleteContact)
			.addCase(deleteContact.rejected, handleRejected)
	},
})

export const contactsReducer = contactsSlice.reducer
