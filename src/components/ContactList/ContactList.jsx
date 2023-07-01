import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../redux/contacts/operations'
import { DeleteIcon } from '@chakra-ui/icons'
import { selectFilteredContacts } from '../../redux/filter/selectors'
import { selectError, selectIsLoading } from '../../redux/contacts/selectors'
import { VStack, Box, IconButton, Spinner, Center } from '@chakra-ui/react'

const ContactList = () => {
	const dispatch = useDispatch()

	const filteredContacts = useSelector(selectFilteredContacts)
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)

	return (
		<>
			{isLoading && <Spinner color="blue.500" />}
			{error && <p>Error</p>}
			{!isLoading && !error && filteredContacts.length < 1 && <p>Ничё не нашли</p>}
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
								bgColor="blackAlpha.200"
								alignItems="center"
							>
								<p>{name}</p>
								<p>{number}</p>
								<IconButton
									aria-label="Delete contact"
									colorScheme="red"
									variant="ghost"
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
