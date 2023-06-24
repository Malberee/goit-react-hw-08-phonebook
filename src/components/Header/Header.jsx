import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/auth/operations'
import { selectIsLoggedIn, selectUserEmail } from '../../redux/auth/selectors'
import UserMenu from '../UserMenu'
import {
	Box,
	Flex,
	IconButton,
	useColorMode,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { AiFillHome } from 'react-icons/ai'

const Header = () => {

	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box as="header" padding="10px" w="100vw">
			<Flex justifyContent="space-between">
				<IconButton as={Link} to="/" icon={<AiFillHome />} />
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
