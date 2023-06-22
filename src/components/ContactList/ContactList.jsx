import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../redux/contacts/contactsOperations'
import { DeleteIcon } from '@chakra-ui/icons'
import {selectFilteredContacts} from '../../redux/filter/filterSelectors'
import {
	selectError,
	selectIsLoading,
} from '../../redux/contacts/contactsSelectors'
import { VStack, Box, IconButton } from '@chakra-ui/react'

const ContactList = () => {
	const dispatch = useDispatch()

	const filteredContacts = useSelector(selectFilteredContacts)
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>{console.log(error)}</p>}
			{!isLoading && !error && filteredContacts.length < 1 && (
				<p>Ничё не нашли</p>
			)}
			{!isLoading && !error && (
				<VStack spacing="15px" as="ul">
					{filteredContacts.map(({ id, name, number }) => {
						return (
							<Box
								key={id}
								as="li"
								w="100%"
								display="flex"
								justifyContent="space-between"
								padding="10px"
								borderRadius="md"
								bg="gray.100"
								alignItems="center"
							>
								<p>{name}</p>
								<p>{number}</p>
								<IconButton
									aria-label="Delete contact"
									icon={<DeleteIcon />}
									onClick={() => dispatch(deleteContact(id))}
								/>
							</Box>
						)
					})}
				</VStack>
			)}
		</>
	)
}

export default ContactList
