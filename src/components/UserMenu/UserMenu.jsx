import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/auth/operations'
import { selectIsLoggedIn, selectUserEmail } from '../../redux/auth/selectors'
import {
	Box,
	Flex,
	Button,
	IconButton,
	Text,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorMode,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AtSignIcon, HamburgerIcon } from '@chakra-ui/icons'

const UserMenu = () => {
	const dispatch = useDispatch()

	const userEmail = useSelector(selectUserEmail)
	const isLoggedIn = useSelector(selectIsLoggedIn)


	const handleLogout = () => {
		dispatch(logOut())
	}

	return (
			<Popover>
				<PopoverTrigger>
					<IconButton icon={<HamburgerIcon />} />
				</PopoverTrigger>
				<PopoverContent textAlign="left" padding="10px">
					{isLoggedIn ? (
						<>
							<Text mb="10px">
								<AtSignIcon mr="5px" />
								{userEmail}
							</Text>
							<Button
								icon={HamburgerIcon}
								colorScheme="red"
								onClick={handleLogout}
							>
								Log Out
							</Button>
						</>
					) : (
						<>
							<Button as={Link} to="/login" colorScheme="blue">
								Log In
							</Button>
							<Button as={Link} to="/register" colorScheme="green" mt="10px">
								Sign Up
							</Button>
						</>
					)}
				</PopoverContent>
			</Popover>
	)
}

export default UserMenu
