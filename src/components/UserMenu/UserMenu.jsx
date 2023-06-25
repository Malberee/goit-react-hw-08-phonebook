import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/operations'
import { useAuth } from '../../hooks/useAuth'
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

	const { user, isLoggedIn } = useAuth()

	const handlelogout = () => {
		dispatch(logout())
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
							{user.email}
						</Text>
						<Button
							icon={HamburgerIcon}
							colorScheme="red"
							onClick={handlelogout}
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
