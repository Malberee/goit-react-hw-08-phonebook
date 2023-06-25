import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { AiFillHome, AiFillContacts } from 'react-icons/ai'

const Navigation = () => (
	<>
		<IconButton
			as={NavLink}
			_activeLink={{ backgroundColor: '#2b6cb0', color: 'white' }}
			to="/"
			icon={<AiFillHome />}
		/>
		<IconButton
			as={NavLink}
			_activeLink={{ backgroundColor: '#2b6cb0', color: 'white' }}
			to="/contacts"
			icon={<AiFillContacts />}
		/>
	</>
)

export default Navigation
