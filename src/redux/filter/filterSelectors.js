import { createSelector } from '@reduxjs/toolkit'
import { selectContacts } from '../contacts/contactsSelectors'

export const selectFilter = (state) => state.filter

export const selectFilteredContacts = createSelector(
	[selectContacts, selectFilter],
	(contacts, filter) => {
		return contacts.filter(({ name }) =>
			name.toLowerCase().includes(filter.toLowerCase())
		)
	}
)
