import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaPhone, FaUser } from 'react-icons/fa'
import { addContact } from '../../redux/contacts/operations'
import { selectContacts } from '../../redux/contacts/selectors'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import {
	Input,
	InputLeftElement,
	FormControl,
	InputGroup,
	Button,
} from '@chakra-ui/react'
const ContactForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const contacts = useSelector(selectContacts)
	const isLoggedIn = useSelector(selectIsLoggedIn)

	const [name, setName] = useState('')
	const [number, setNumber] = useState('')

	const onChange = (e) => {
		const { name, value } = e.target
		name === 'name' && setName(value)
		name === 'number' && setNumber(value)
	}

	const onSubmit = (e) => {
		e.preventDefault()

		if (isLoggedIn) {
			const alreadyExists = contacts.some(
				(contact) => contact.name.toLowerCase() === name.toLowerCase()
			)

			if (alreadyExists) {
				alert(`${name} is already in contacts`)
				return
			}
			dispatch(addContact({ name: name, number: number }))
		} else {
			navigate('/login', { replace: true })
		}

		setName('')
		setNumber('')
	}

	return (
		<FormControl as="form" onSubmit={onSubmit}>
			<InputGroup mt="20px">
				<InputLeftElement>
					<FaUser />
				</InputLeftElement>
				<Input
					placeholder='Name'
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					value={name}
					onChange={onChange}
				/>
			</InputGroup>
			<InputGroup mt="10px">
				<InputLeftElement>
					<FaPhone />
				</InputLeftElement>
				<Input
					placeholder='Number'
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					value={number}
					onChange={onChange}
				/>
			</InputGroup>
			<Button type="submit" colorScheme="blue" mt="10px" w="100%">
				Add contact
			</Button>
		</FormControl>
	)
}

export default ContactForm
