import React from 'react'
import {
	Box,
	Flex,
	Button,
	IconButton,
	Text,
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@chakra-ui/react'
import { AtSignIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
	const handleLogout = () => {
		console.log('Log out сделай, не забудь')
	}

	return (
	<Box as="header" padding="10px" w="100vh">
		<Flex justifyContent="space-between">
			<IconButton icon={<MoonIcon/>} >Theme</IconButton>
			<Popover>
				<PopoverTrigger>
					<IconButton icon={<HamburgerIcon/>} />
				</PopoverTrigger>
				<PopoverContent
					textAlign="left"
					padding="10px"
				>
					<Text mb="10px">
						<AtSignIcon mr="5px" />
						E-mail address
					</Text>
					<Button icon={HamburgerIcon} colorScheme="green" onClick={handleLogout}>Log Out</Button>
				</PopoverContent>
			</Popover>
		</Flex>
	</Box>
)}

export default Header
