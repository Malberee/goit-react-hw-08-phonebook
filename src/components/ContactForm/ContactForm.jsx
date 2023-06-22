import { useState } from 'react'
import { FaPhone, FaUser } from 'react-icons/fa'
import { addContact } from '../../redux/contacts/contactsOperations'
import { selectContacts } from '../../redux/contacts/contactsSelectors'
import { Form, FormIcon } from './ContactForm.styled'
import { Input, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
const ContactForm = () => {
	const dispatch = useDispatch()

	const contacts = useSelector(selectContacts)

	const [name, setName] = useState('')
	const [number, setNumber] = useState('')

	const onChange = (e) => {
		const { name, value } = e.target
		name === 'name' && setName(value)
		name === 'number' && setNumber(value)
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const alreadyExists = contacts.some(
			(contact) => contact.name.toLowerCase() === name.toLowerCase()
		)

		if (alreadyExists) {
			alert(`${name} is already in contacts`)
			return
		}
		dispatch(addContact({ name: name, number: number }))

		setName('')
		setNumber('')
	}

	return (
		<Form onSubmit={onSubmit}>
			<label>
				<FormIcon>
					<FaUser />
				</FormIcon>
				Name
				<Input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					value={name}
					onChange={onChange}
				/>
			</label>
			<label>
				<FormIcon>
					<FaPhone />
				</FormIcon>
				Number
				<Input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					value={number}
					onChange={onChange}
				/>
			</label>
			<Button type="submit" colorScheme='blue'>Add contact</Button>
		</Form>
	)
}

export default ContactForm
