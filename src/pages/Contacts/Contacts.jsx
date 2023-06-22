import { useEffect } from 'react'
import { Box, Heading, VStack, Divider } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchContacts } from '../../redux/contacts/contactsOperations'
import { selectContacts } from '../../redux/contacts/contactsSelectors'
import Header from '../../components/Header'
import ContactForm from '../../components/ContactForm'
import ContactList from '../../components/ContactList'
import Filter from '../../components/Filter'

const Contacts = () => {
	const contacts = useSelector(selectContacts)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	return (
		<>
			<Header />
			<VStack  >
				<Box as="section" w="350px">
					<Heading>Phonebook</Heading>
					<ContactForm />
				</Box>
				<Divider w="370px" />
				<Box as="section" w="350px">
					{contacts.length ? (
						<>
							<Heading>Contacts</Heading>
							<Filter />
							<ContactList contacts={contacts} />
						</>
					) : (
						<p>Not found</p>
					)}
				</Box>
			</VStack>
		</>
	)
}

Contacts.propTypes = {}

Contacts.defaultProps = {}

export default Contacts
