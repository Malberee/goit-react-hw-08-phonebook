import React from 'react'
import UserMenu from '../UserMenu'
import {
	Box,
	Flex,
	IconButton,
	useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Navigation from '../Navigation'

const Header = () => {

	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box as="header" padding="10px" w="100vw">
			<Flex justifyContent="space-between">
				<Flex gap="10px"><Navigation/></Flex>
				<Flex gap="10px">
					<IconButton
						icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
						onClick={toggleColorMode}
					/>
					<UserMenu />
				</Flex>
			</Flex>
		</Box>
	)
}

export default Header
